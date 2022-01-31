import {IRouter, Router} from 'express';
import stationController from '../controllers/Station.controller';

const stationRouter: IRouter = Router();

stationRouter.get('/', stationController.getAll);
stationRouter.post('/create', stationController.create);
stationRouter.patch('/update/:stationId', stationController.update)

export default stationRouter;
