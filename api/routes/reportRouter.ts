import { Router } from "express";

const reportRouter = Router();

reportRouter.post("/optimise", (req, res) => res.sendStatus(200));

export default reportRouter;
