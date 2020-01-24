import express, { Application } from "express";
import fs from "fs";
import moment from "moment-timezone";
import morgan from "morgan";
import path from "path";
import rfs from "rotating-file-stream";
import winston from "winston";
const S3StreamLogger = require("s3-streamlogger").S3StreamLogger;

// create a rotating write stream
const stream = rfs("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "../log")
});

const s3_stream = new S3StreamLogger({
  bucket: "lookahead-rohyl",
  name_format: "%d-%m-%Y",
  access_key_id: process.env.AWS_ACCESS_KEY_ID,
  secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  rotate_every: 86400000 /* every day */
});
var transport = new winston.transports.Stream({
  stream: s3_stream
});

var logger = winston.createLogger({
  transports: [transport]
});

/**
 * Retrieve the UUID of the incoming request
 */
morgan.token("id", req => {
  if (!req.query.uuid) {
    return "no user id";
  }
  return req.query.uuid;
});

/**
 * Format the subject retrieval query
 */
morgan.token(
  "subjectinfo",
  req => `${req.query.code} (${req.query.year}) (${req.query.period})`
);

/**
 * Format subject list retrieval query
 */
morgan.token("listinfo", req => `${req.query.year} - ${req.query.period}`);

/**
 * Format optimise query
 */
morgan.token(
  "optimiseinfo",
  req =>
    `(${req.body.subjects.join(", ")}) Generated ${
      req.body.generated
    } timetables in ${Math.round(req.body.time) / 1000} seconds. Min: ${
      req.body.earliest
    }, Max: ${req.body.latest}. ${req.body.optimisations &&
      formatOptimisations(req.body.optimisations)}`
);

/**
 * Format optimisation array
 */
const formatOptimisations = (arr: object[]): string =>
  arr.reduce(
    (prev: any, curr: any) =>
      prev +
      (prev && ", ") +
      curr.type +
      (curr.data !== undefined ? "(" + curr.data + ")" : ""),
    ""
  );

/**
 * Get current time in Melbourne
 */
morgan.token("date", () => {
  return moment()
    .tz("Australia/Melbourne")
    .format("hh:mm");
});

morgan.token("sponsorname", req => req.body.name);
morgan.token("clickitem", req => req.body.item);

/**
 * Setup morgan logging to the rotating file stream
 * @param {string} format The morgan format string
 * @param {string} route The /api/ route to apply the morgan log format to
 */
const setupMorgan = (format: string, route: string) =>
  morgan(format, {
    skip: (req, res) => {
      return req.baseUrl + req.path !== `/api/${route}`;
    },
    stream: {
      write: str => {
        if (process.env.NODE_ENV === "production") {
          logger.info(str.trim());
        } else {
          console.log(str);
        }
      }
    }
  });

/**
 * Initialises Morgan logging
 * @param app Express application to attach logging to
 */
export const initialiseLogging = (app: Application) => {
  app.use(setupMorgan("[:date[web]] :id: [Subject] :subjectinfo ", "subject/"));
  app.use(setupMorgan("[:date[web]] :id: [List] :listinfo ", "subjectlist/"));
  app.use(
    setupMorgan(
      "[:date[web]] :id: [SponsorClick] :sponsorname :clickitem ",
      "sponsorlist/log"
    )
  );
  app.use(
    setupMorgan(
      "[:date[web]] :id: [Optimise] :optimiseinfo ",
      "report/optimise"
    )
  );
};
