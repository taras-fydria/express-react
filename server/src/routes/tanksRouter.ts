import  {Router, IRouter} from  'express'
import tanksController from '../controllers/TankController'

const tanksRouter:IRouter =  Router()

tanksRouter.get('/', tanksController.getAll)
tanksRouter.post('/create', tanksController.create)

export default tanksRouter