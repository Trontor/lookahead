import express, { Application } from "express";
import fs from "fs";
import moment from "moment";
import morgan from "morgan";
import path from "path";
import rfs from "rotating-file-stream";

// create a rotating write stream
const stream = rfs("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "../log")
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
    .utcOffset(10)
    .format("hh:mm");
});

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
    stream
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
      "[:date[web]] :id: [Optimise] :optimiseinfo ",
      "report/optimise"
    )
  );
};
