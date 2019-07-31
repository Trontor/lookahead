import { Request, Response } from "express";
import fs from "fs";
import path from "path";

/**
 * Returns the latest log file from the Morgan rotating file system stream
 */
export const getLatestLog = (req: Request, res: Response) => {
  const logPath = path.join(__dirname, "../../log/access.log");
  fs.readFile(logPath, "utf8", (err, data) => {
    if (!err) {
      res.set("Content-Type", "text/plain");
      res.send(
        // Reverse lines such that the latest log appears at the top
        data
          .split("\n")
          .reverse()
          .join("\n")
      );
    } else {
      console.log(err);
    }
  });
};
