import  {Router, IRouter} from  'express'
import tanksController from '../controllers/tanksController'

const tanksRouter:IRouter =  Router()

tanksRouter.get('/', tanksController.getAll)
tanksRouter.post('/create', tanksController.create)

export default tanksRouter