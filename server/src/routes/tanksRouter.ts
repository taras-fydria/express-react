import  {Router, IRouter} from  'express'
import tanksController from '../controllers/tanksController'

const tanksRouter:IRouter =  Router()

tanksRouter.get('/', tanksController.getAll)

export default tanksRouter