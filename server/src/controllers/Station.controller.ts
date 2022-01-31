import {NextFunction, Request, Response} from 'express';
import {Station} from '../entity/Station';
import {EntityTarget, getCustomRepository, Repository} from 'typeorm';
import ProjectController from "./Project.controller";
import StationRepository from "../repository/StationRepository";
import ApiError from "../error/ApiError";

class StationController extends ProjectController<StationRepository> {
    constructor(entity: EntityTarget<StationRepository> = Station) {
        super(entity);
    }

    public getAll = async (req: Request, res: Response, next: NextFunction): Promise<Response<string> | void> => {
        const repository: Repository<StationRepository> = this.repository;
        const stations: StationRepository[] = await repository.find();
        return res.json(stations)
    }

    public create = async (req: Request, res: Response, next: NextFunction): Promise<Response<string> | void> => {
        const customRepository: StationRepository = getCustomRepository(StationRepository);
        const station = await customRepository.createAndSave(req)
        return res.json(station)
    }

    public update = async (req: Request, res: Response, next: NextFunction): Promise<Response<string> | void> => {
        const stationData = req.body;
        const repo = this.repository;
        const newStation = new Station()
        newStation.tel = req.body.tel
        newStation.name = req.body.tel
        newStation.address = req.body.address
        console.log(newStation)
        const response = await repo.update(req.params.stationId, stationData)
        return res.json(response)
    }
}

export default new StationController();
