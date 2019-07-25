// Load .env file
import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import path = require("path");
import apiRouter from "./api/api";
import { initialiseLogging } from "./api/logging";
import { initialise } from "./google-sheets/sheets";

dotenv.config();

const app: Application = express();
// Production port or port 5000
const port = process.env.PORT || 5000;
// Set up to serve static files
app.use(express.static("client/build"));
// Parse application/json
app.use(bodyParser.json());
// Initialise Google Sheets API (to access club list)
initialise();
// Serves the React build
app.get("/", (req: Request, res: Response) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);
// Set up logging
initialiseLogging(app);

// Routes requests to /api/
app.use("/api/", apiRouter);

// Listen on port
app.listen(port, () => {
  console.log(`Express server initialised on port ${port}`);
});
