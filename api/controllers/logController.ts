import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { S3 } from "aws-sdk";

const s3 = new S3();

/**
 * Returns the latest log file from the Morgan rotating file system stream
 */
export const getLatestLog = async (req: Request, res: Response) => {
  let { history } = req.query;
  const objects = await s3.listObjects({ Bucket: "lookahead-rohyl" }).promise();
  if (objects.Contents.length === 0) {
    res.send("No S3 bucket objects found.");
    return;
  }
  const validHistory =
    history !== undefined && objects.Contents.length - parseInt(history) > 0;
  if (!validHistory) {
    history = "0";
  }
  const latestLogKey =
    objects.Contents[objects.Contents.length - parseInt(history) - 1].Key;
  const logData = await s3
    .getObject({
      Bucket: "lookahead-rohyl",
      Key: latestLogKey
    })
    .promise();
  res.set("Content-Type", "text/plain");
  res.send(
    logData.Body.toString()
      .trim()
      .replace(/{"message":"/g, "")
      .replace(/","level":"info"}/g, "")
      .split("\n")
      .reverse()
      .join("\n")
  );
};
