const {Station} = require('../models/models')

class StationController {
  async getAll(req, res) {
    const stations = await Station.findAll({
      attributes:['name']
    })
    return res.json(stations)
  }

  async create(req, res) {
    const {name, address, tel} = req.body
    const station = await Station.create({name, address, tel})
    return res.json(station)

  }
}

module.exports = new StationController()