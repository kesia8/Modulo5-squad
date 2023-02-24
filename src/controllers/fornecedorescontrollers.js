import { bdFornecedores } from '../infra/bd.js'

class fornecedoresController {

    static rotas(app) {
        app.get('/Fornecedores', fornecedoresController.listar)
    }

    //ROTA GET
    static listar(req, res) {

        res.send(bdFornecedores)
    }
//ROTA GET de BUSCAR
    static buscarPorCod(req, res) {
        const Fornecedor = bdFornecedor.find(Fornecedor => Fornecedor.cod === req.params.cod)

        //se for vazio(se não cliente)  
        if (!Fornecedor) {
            res.send("Fornecedor não encontrado")
            return
        }

        res.send(Fornecedor)
    }

    //ROTA POST
    static inserir(req, res) {
        const Fornecedor = new Fornecedor(req.body.cod, req.body.nome, req.body.cidade, req.body.estado )
        bdFornecedor.push(Fornecedor)
        res.send(bdFornecedor)
        console.log(req.body)
    }


    //ROTA PUT

    static atualizarFornecedor(req, res) {
        const Fornecedor = bdFornecedor.find(Fornecedor => Fornecedor.cod === req.params.cod)

        if (!Fornecedor) {
            res.send('Fornecedor não encontrado')
            // res.status(404).send('Fornecedor não encontrado')
            return 
        }

        Fornecedor.cod = req.body.cod
        Fornecedor.nome = req.body.nome
        Fornecedor.cidade = req.body.cidade
        Fornecedor.estado = req.body.estado
        
        
        // res.status(200).send(bdFornecedor)
        res.send(bdFornecedor)
    }



    // ROTA DELETE
    static deletar(req, res) {
        const cliente = bdFornecedor.find(Fornecedor => Fornecedor.cod === req.params.cod)

        if (!Fornecedor) {
            res.send("Fornecedor não encontrado")
            return
        }

        const index = bdFornecedor.indexOf(Fornecedor);
        bdFornecedor.splice(index, 1);
        res.send({
            "Mensagem": `O fornecedor do código ${Fornecedor.cod} foi deletado!`
        });
    }


}


export default fornecedorController
