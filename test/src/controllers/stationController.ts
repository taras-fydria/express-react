import {Request, Response} from "express";
import {Station} from '../models/models'

class StationController {
  async getAll(req: Request, res: Response) {
    const stations = await Station.findAll()
    return res.json(stations)
  }

  async create(req: Request, res: Response) {
    console.log(req.body)
    const {name, address, tel} = req.body
    const station = await Station.create({name, address, tel}).catch(err=>console.log(err))
    return res.json(station)

  }
}

export default new StationController()