import {Router} from 'express';

const reportRouter = Router();

/**
 * Route receiving optimisation information (used for logging)
 */
reportRouter.post('/optimise', (req, res) => res.sendStatus(200));

export default reportRouter;
