import { Router } from "express";
import { getClubs } from "../controllers/clubListController";

const clubListRouter = Router();

clubListRouter.get("/", getClubs);

export default clubListRouter;
