import express from "express";
const router = express.Router();

import subjectListRouter from "./routes/subjectListRouter";
import subjectRouter from "./routes/subjectRouter";

router.use("/subjectlist", subjectListRouter);
router.use("/subject", subjectRouter);

export default router;
