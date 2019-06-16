import express, { Application, Request, Response } from "express";
import path = require("path");

import subjectListRouter from "./api/routes/subjectListRouter";
import subjectRouter from "./api/routes/subjectRouter";

const app: Application = express();
const port = process.env.PORT || 5000;

// // Production routing to react app
// if (process.env.NODE_ENV == "production") {
//   // Set static folder
// }
app.use(express.static("client/build"));
app.get("/", (req: Request, res: Response) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

app.use("/api/subjectlist", subjectListRouter);
app.use("/api/subject", subjectRouter);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Express server initialised on port ${port}`);
});
