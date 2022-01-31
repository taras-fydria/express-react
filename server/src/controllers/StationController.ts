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

    public create = async (req: Request, res: Response): Promise<any> => {
        try{

        console.log(req.body)
        const repository: Repository<Station> = this.repository;
        const station: Station = repository.create()
        return res.json(station)
        }catch (e){
            console.log(e)
        }
    }
}

export default new StationController();
