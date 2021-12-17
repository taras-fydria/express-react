const {Station} = require('../models/models')

class StationController {
  async getAll(req, res) {
    const stations = await Station.findAll()
    return res.json(stations)
  }

  async create(req, res) {
    console.log(req.body)
    const {name, address, tel} = req.body
    const station = await Station.create({name, address, tel}).catch(err=>console.log(err))
    return res.json(station)

  }
}

module.exports = new StationController()