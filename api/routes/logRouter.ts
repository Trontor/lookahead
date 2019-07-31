import { Router } from "express";
import { getLatestLog } from "../controllers/logController";

const logRouter = Router();

/**
 * Route to serve log for the current day
 */
logRouter.get("/", getLatestLog);

export default logRouter;
