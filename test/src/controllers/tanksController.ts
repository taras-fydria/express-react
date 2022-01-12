import{Response, Request} from "express";


class TanksController{
    getAll(req:Request, res: Response){
        return res.send('all tanks')
    }
}

export default new TanksController()