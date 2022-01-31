import {Request, Response} from 'express';
import {Station} from '../entity/Station';
import {EntityTarget, Repository} from 'typeorm';
import ProjectController from "./ProjectController";

class StationController extends ProjectController<Station> {
    constructor(entity: EntityTarget<Station> = Station) {
        super(entity);
    }

    public getAll = async (req: Request, res: Response): Promise<Response<string>> => {
        const repository: Repository<Station> = this.repository;
        const stations: Station[] = await repository.find();
        return res.json(stations);
    }

    public create = async (req: Request, res: Response): Promise<Response<string>> => {
        try {
            const repository: Repository<Station> = this.repository;
            const station: Station = await repository.findOne(req.params.id);
            if (station) {
                repository.merge(station, req.params);
                const result: Station = await repository.save(station);
                return res.json(result);
            }

        } catch (e) {
            console.log(e);
        }
    }
}

export default new StationController();
