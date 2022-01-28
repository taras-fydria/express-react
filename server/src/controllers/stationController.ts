import {Request, Response} from "express";
import {Station} from '../entity/Station'
import {getRepository} from "typeorm";

class StationController {
    private stationRepository

    constructor() {
        this.stationRepository = getRepository<Station>(Station)
    }

    async getAll(req: Request, res: Response) {
        const stations = await this.stationRepository.find()
        return res.json(stations)
    }

    async create(req: Request, res: Response) {
        try {
            const station = await this.stationRepository.findOne(req.params.id)
            if (!station) {
                new Error('not valid id')
            }
            this.stationRepository.merge(station, req.params)
            const result = await this.stationRepository.save(station)
            return res.json(result)

        } catch (e) {
            console.log(e)
        }

    }
}

export default new StationController()