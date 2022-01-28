import {getRepository} from "typeorm";
import {Station} from "../entity/Station";
import {IRouter} from "express";
import {Router} from "express/ts4.0";
import stationController from "../controllers/stationController";

const stationRouter : IRouter = Router();

stationRouter.get('/', stationController.getAll)
stationRouter.put('/create', stationController.create)