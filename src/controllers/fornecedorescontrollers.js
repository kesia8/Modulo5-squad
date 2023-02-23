import { bdFornecedores } from '../infra/bd.js'

class fornecedoresController {

    static rotas(app) {
        app.get('/Fornecedores', fornecedoresController.listar)
    }

    //ROTA GET
    static listar(req, res) {

        res.send(bdFornecedores)
    }
}

export default fornecedoresController
