import {Router} from 'express';
import {getSponsors, logSponsors} from '../controllers/sponsorListController';

const sponsorListRouter = Router();

/**
 * Route serving sponsorship list
 */
sponsorListRouter.get('/', getSponsors);

sponsorListRouter.post('/log', logSponsors);

export default sponsorListRouter;
