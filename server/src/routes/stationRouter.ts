import {Router, IRouter} from 'express'
import stationController from '../controllers/stationController'

const stationRouter:IRouter = Router()

stationRouter.get('/', stationController.getAll)
stationRouter.post('/', stationController.create)

export default stationRouter