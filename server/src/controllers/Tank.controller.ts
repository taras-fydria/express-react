import {Response, Request} from 'express';
import {Repository} from 'typeorm';
import Tank from '../entity/Tank';
import ProjectController from "./Project.controller";


class TankController extends ProjectController<Tank> {
    constructor(entity = Tank) {
        super(entity);
    }

    public getAll = async (req: Request, res: Response): Promise<Response> => {
        const repo: Repository<Tank> = this.repository;
        const tanks: Tank[] = await repo.find();
        return res.json(tanks);
    }

    public getTank = async (req: Request, res: Response): Promise<Response> => {
        const repo: Repository<Tank> = this.repository;
        const tank: Tank | undefined = await repo.findOne(req.params.id);
        return res.json(tank);
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const repo: Repository<Tank> = this.repository;
        const tankData = req.body;
        const newTank = await repo.create(tankData);
        return res.json(newTank);
    }
}

export default new TankController();
