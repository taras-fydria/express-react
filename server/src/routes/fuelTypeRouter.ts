import {Router, IRouter} from "express";
import FuelTypeController from "../controllers/FuelTypeController";

const fuelTypeRouter: IRouter = Router()

fuelTypeRouter.get('/', FuelTypeController.getAll)
fuelTypeRouter.get('/:id', FuelTypeController.getFuelType)