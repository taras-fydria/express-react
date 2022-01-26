import {IRouter, Router} from 'express'
import tanksRouter from './tanksRouter'
import stationRouter from "./stationRouter";


const AppRouter: IRouter = Router();

AppRouter.use('/stations' , stationRouter)
AppRouter.use('/tanks', tanksRouter)

export default AppRouter