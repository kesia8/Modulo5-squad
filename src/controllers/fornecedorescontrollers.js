import { bdFornecedores } from '../infra/bd.js'
import Fornecedores from '../models/fornecedores.js'

class fornecedoresController {

    static rotas(app) {
        app.get('/Fornecedores', fornecedoresController.listar)
        app.get('/Fornecedores/id', fornecedoresController.buscarPorCod)
        app.post('/Fornecedores', fornecedoresController.inserir)
        app.put('/Fornecedores/id', fornecedoresController.atualizarFornecedor)
        app.delete('/Fornecedores/id', fornecedoresController.deletar)

    }

    //ROTA GET
    static listar(req, res) {

        res.send(bdFornecedores)
    }
//ROTA GET de BUSCAR
    static buscarPorCod(req, res) {
        const Fornecedor = bdFornecedores.find(Fornecedores => Fornecedores.cod === req.params.cod)

        //se for vazio(se não cliente)  
        if (!Fornecedores) {
            res.send("Fornecedor não encontrado")
            return
        }

        res.send(Fornecedor)
    }

    //ROTA POST
    static inserir(req, res) {
        const Fornecedores = new Fornecedores(req.body.cod, req.body.nome, req.body.cidade, req.body.estado )
        bdFornecedores.push(Fornecedores)
        res.send(bdFornecedores)
        console.log(req.body)
    }


    //ROTA PUT

    static atualizarFornecedores(req, res) {
        const Fornecedores = bdFornecedores.find(Fornecedores => Fornecedores.cod === req.params.cod)

        if (!Fornecedores) {
            res.send('Fornecedor não encontrado')
            // res.status(404).send('Fornecedor não encontrado')
            return 
        }

        Fornecedores.cod = req.body.cod
        Fornecedores.nome = req.body.nome
        Fornecedores.cidade = req.body.cidade
        Fornecedores.estado = req.body.estado
        
        
        // res.status(200).send(bdFornecedor)
        res.send(bdFornecedores)
    }



    // ROTA DELETE
    static deletar(req, res) {
        const cliente = bdFornecedores.find(Fornecedores => Fornecedores.cod === req.params.cod)

        if (!Fornecedores) {
            res.send("Fornecedor não encontrado")
            return
        }

        const index = bdFornecedores.indexOf(Fornecedores);
        bdFornecedores.splice(index, 1);
        res.send({
            "Mensagem": `O fornecedor do código ${Fornecedores.cod} foi deletado!`
        });
    }


}


export default fornecedoresController
