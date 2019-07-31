import { Router } from "express";
import { getSponsors } from "../controllers/sponsorListController";

const sponsorListRouter = Router();

/**
 * Route serving sponsorship list
 * @name get/login
 * @function
 * @memberof module:routers/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
sponsorListRouter.get("/", getSponsors);

export default sponsorListRouter;
