const Router = require('express')
const stationController = require('../controllers/stationController')

const router = new Router()

router.get('/', stationController.getAll)

module.exports = router