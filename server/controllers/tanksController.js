

class TanksController{
    getAll(req, res){
        return res.send('all tanks')
    }
}

module.exports = new TanksController()