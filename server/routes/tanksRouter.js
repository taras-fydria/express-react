const Router = require('express')
const tanksRouter = require('../controllers/tanksController')

const router = new Router

router.get('/', tanksRouter.getAll)

module.exports = router