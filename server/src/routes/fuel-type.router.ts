import {IRouter, Router} from 'express';
import FuelTypeController from "../controllers/FuelType.controller";

const fuelTypeRouter: IRouter = Router()

fuelTypeRouter.get('/', FuelTypeController.getAll)
fuelTypeRouter.get('/:id', FuelTypeController.getFuelType)
