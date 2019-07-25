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

// Retrieve the UUID of the incoming request
morgan.token("id", req => {
  if (!req.query.uuid) {
    return "localhost";
  }
  return req.query.uuid;
});

// Formats subject retrieval information
morgan.token(
  "subjectinfo",
  req => `${req.query.code} (${req.query.year}) (${req.query.period})`
);
// Formats subject list
morgan.token("listinfo", req => `${req.query.year} - ${req.query.period}`);
// Formats optimisation data
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
// Formats an optimisation array
const formatOptimisations = (arr: object[]): string =>
  arr.reduce(
    (prev: any, curr: any) =>
      prev +
      (prev && ", ") +
      curr.type +
      (curr.data !== undefined ? "(" + curr.data + ")" : ""),
    ""
  );

// Melbourne date
morgan.token("date", () => {
  return moment()
    .utcOffset(10)
    .format("hh:mm");
});

const setupMorgan = (format: string, route: string) =>
  morgan(format, {
    skip: (req, res) => {
      // console.log(req.baseUrl + req.path);
      return req.baseUrl + req.path !== `/api/${route}`;
    },
    stream
  });

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
