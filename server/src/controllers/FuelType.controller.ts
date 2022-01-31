import ProjectController from "./Project.controller";
import FuelType from "../entity/FuelType";
import {EntityTarget, Repository} from "typeorm";
import {Request, Response} from "express";

class FuelTypeController extends ProjectController<FuelType> {
    constructor(entity: EntityTarget<FuelType> = FuelType) {
        super(entity);
    }

    getAll = async (req: Request, res: Response): Promise<Response<string>> => {
        const repository: Repository<FuelType> = this.repository
        const allFuelTypes: FuelType[] = await repository.find()
        return res.json(allFuelTypes)
    }

    getFuelType = async (req: Request, res: Response): Promise<Response<string>> => {
        const repository = this.repository
        const fuelType = await repository.findOne(req.params.id)
        return res.json(fuelType)
    }

}

export default new FuelTypeController()
