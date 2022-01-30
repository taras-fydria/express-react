import {Request, Response} from 'express';
import {Station} from '../entity/Station';
import {getRepository, Repository} from 'typeorm';

class StationController {
  protected static get getRepo(): Repository<Station> {
    return getRepository(Station);
  }

  async getAll(req: Request, res: Response): Promise<Response<string>> {
    const repository: Repository<Station> = StationController.getRepo;
    const stations: Station[] = await repository.find();
    return res.json(stations);
  }

  async create(req: Request, res: Response): Promise<Response<string>> {
    try {
      const repository: Repository<Station> = StationController.getRepo;
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
