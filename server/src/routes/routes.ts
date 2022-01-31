import {IRouter, Router} from 'express'
import stationRouter from "./stationRouter";
import tanksRouter from "./tanksRouter";


const AppRouter: IRouter = Router();

AppRouter.use('/stations' , stationRouter)
AppRouter.use('/tanks', tanksRouter)
AppRouter.use('/fuel-types', tanksRouter)

export default AppRouter
