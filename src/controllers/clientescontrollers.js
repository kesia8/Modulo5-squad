import { bdCliente } from '../infra/bd.js'

class clienteController {

    static rotas(app) {
        app.get('/Cliente', clienteController.listar)

    }

    //ROTA GET
    static listar(req, res) {

        res.send(bdCliente)
    }
}


export default clienteController
