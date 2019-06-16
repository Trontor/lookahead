import express, { Application, Request, Response } from "express";
import path = require("path");
import apiRouter from "./api/api";

const app: Application = express();
// Production port or port 5000
const port = process.env.PORT || 5000;
// Set up to serve static files
app.use(express.static("client/build"));
// Serves the React build
app.get("/", (req: Request, res: Response) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);
// Routes requests to /api/
app.use("/api/", apiRouter);
// Listen on port
app.listen(port, () => {
  console.log(`Express server initialised on port ${port}`);
});
