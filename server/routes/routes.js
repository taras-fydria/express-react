const Router = require('express')
const stationRouter = require('./stationRouter')
const tanksRouter = require('./tanksRouter')

const router = new Router()

router.use('/station' , stationRouter)
router.use('/tanks', tanksRouter)

module.exports = router