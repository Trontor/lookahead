import { Router } from "express";
import { getLatestLog } from "../controllers/logController";

const logRouter = Router();

logRouter.get("/", getLatestLog);

export default logRouter;
