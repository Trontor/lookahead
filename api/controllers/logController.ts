import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const getLatestLog = (req: Request, res: Response) => {
  const logPath = path.join(__dirname, "../../log/access.log");
  fs.readFile(logPath, "utf8", (err, data) => {
    if (!err) {
      res.set("Content-Type", "text/plain");
      res.send(
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
