import { Router } from "express";
import { getSubject } from "../controllers/subjectController";

const subjectRouter = Router();

subjectRouter.get("/", getSubject);

export default subjectRouter;
