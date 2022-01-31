import {IRouter, Router} from 'express';
import stationController from '../controllers/StationController';

const stationRouter: IRouter = Router();

stationRouter.get('/', stationController.getAll);
stationRouter.post('/create', stationController.create);

export default stationRouter;
