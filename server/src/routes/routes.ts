import {IRouter, Router} from 'express'
import stationRouter from "./station.router";
import tanksRouter from "./tanks.router";


const AppRouter: IRouter = Router();

AppRouter.use('/stations' , stationRouter)
AppRouter.use('/tanks', tanksRouter)
AppRouter.use('/fuel-types', tanksRouter)

export default AppRouter
