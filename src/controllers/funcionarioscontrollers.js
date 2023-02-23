import { bdFuncionarios } from '../infra/bd.js'

class funcionariosController {

    static rotas(app) {
        app.get('/funcionarios', funcionariosController.listar)
    }

    //ROTA GET
    static listar(req, res) {

        res.send(bdFuncionarios)
    }
}

export default funcionariosController
