import { Router } from "express";
import { getSubjectList } from "../controllers/subjectListController";

const subjectListRouter = Router();

subjectListRouter.get("/", getSubjectList);

export default subjectListRouter;
