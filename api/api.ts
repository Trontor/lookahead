import express from "express";
const router = express.Router();

import clubListRouter from "./routes/clubListRouter";
import subjectListRouter from "./routes/subjectListRouter";
import subjectRouter from "./routes/subjectRouter";

router.use("/subjectlist", subjectListRouter);
router.use("/subject", subjectRouter);
router.use("/clublist", clubListRouter);

export default router;
