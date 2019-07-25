import express from "express";
const router = express.Router();

import clubListRouter from "./routes/clubListRouter";
import reportRouter from "./routes/reportRouter";
import subjectListRouter from "./routes/subjectListRouter";
import subjectRouter from "./routes/subjectRouter";

router.use("/subjectlist", subjectListRouter);
router.use("/subject", subjectRouter);
router.use("/clublist", clubListRouter);
router.use("/report", reportRouter);
export default router;
