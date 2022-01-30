import {Response, Request} from 'express';
import {getRepository, Repository} from 'typeorm';
import Tank from '../entity/Tank';


class TanksController {
  protected static get getRepo(): Repository<Tank> {
    return getRepository(Tank);
  }

  async getAll(req: Request, res: Response) {
    const repo: Repository<Tank> = TanksController.getRepo;
    const tanks: Tank[] = await repo.find();
    return res.json(tanks);
  }

  async getTank(req: Request, res: Response) {
    const repo: Repository<Tank> = TanksController.getRepo;
    const tank: Tank = await repo.findOne(req.params.id);
    return res.json(tank);
  }

  async create(req: Request, res: Response) {
    const repo: Repository<Tank> = TanksController.getRepo;
    const tankData = req.params;
    const newTank = await repo.create(tankData);
    return res.json(newTank);
  }
}

export default new TanksController();
