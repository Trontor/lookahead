import { Router } from "express";
import { getSponsors } from "../controllers/sponsorListController";

const sponsorListRouter = Router();

/**
 * Route serving sponsorship list
 */
sponsorListRouter.get("/", getSponsors);

export default sponsorListRouter;
