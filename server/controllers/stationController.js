// const {Station} = require('../models/models')

class StationController{
    getAll(req, res){
        return res.send('all station')
    }
}

module.exports = new StationController()