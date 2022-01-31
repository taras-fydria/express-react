import {AbstractRepository, EntityRepository} from "typeorm";
import {Station} from "../entity/Station";
import {NextFunction, Request} from 'express'

@EntityRepository(Station)
export default class StationRepository extends AbstractRepository<Station> {
    private telPattern = '/^\\+?([0-9]{2})\\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/'

    async createAndSave(req: Request): Promise<Station | Error> {
        console.log(req.body.tel)
        const station: Station = new Station()
        station.name = req.body?.name;
        station.tel = req.body?.tel;
        station.address = req.body?.address;
        return await this.manager.save(station)
    }

    private validateTel(tel: string) {
        return tel.match(this.telPattern)
    }
}
