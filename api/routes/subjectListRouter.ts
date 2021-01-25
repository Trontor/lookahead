import {Router} from 'express';
import {getSubjectList} from '../controllers/subjectListController';

const subjectListRouter = Router();

/**
 * Route to serve subject lists
 */
subjectListRouter.get('/', getSubjectList);

export default subjectListRouter;
