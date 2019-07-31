import express from "express";
const router = express.Router();

import logRouter from "./routes/logRouter";
import reportRouter from "./routes/reportRouter";
import sponsorListRouter from "./routes/sponsorListRouter";
import subjectListRouter from "./routes/subjectListRouter";
import subjectRouter from "./routes/subjectRouter";

router.use("/subjectlist", subjectListRouter);
router.use("/subject", subjectRouter);
router.use("/sponsorlist", sponsorListRouter);
router.use("/report", reportRouter);
router.use("/log", logRouter);

export default router;
