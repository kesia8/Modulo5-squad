import { bdFuncionarios } from '../infra/bd.js'

class funcionariosController {

    static rotas(app) {
        app.get('/funcionarios', funcionariosController.listar)
    }

    //ROTA GET
    static listar(req, res) {

        res.send(bdFuncionarios)
    }
    
//ROTA GET de BUSCAR
    static buscarPorID(req, res) {
        const funcionarios = bdFuncionarios.find(funcionarios => funcionarios.id === req.params.id)

        //se for vazio(se não cliente)  
        if (!funcionarios) {
            res.send("Funcionarios não encontrado")
            return
        }

        res.send(funcionarios)
    }

    //ROTA POST
    static inserir(req, res) {
        const funcionarios = new Funcionarios(req.body.id, req.body.nome, req.body.CPF, req.body.endereco )
        bdFuncionarios.push(Funcionarios)
        res.send(bdFuncionarios)
        console.log(req.body)
    }


    //ROTA PUT

    static atualizaFuncionario(req, res) {
        const funcionarios = bdFuncionarios.find(funcionarios => funcionarios.id === req.params.id)

        if (!funcionarios) {
            res.send('funcionario não encontrado')
            // res.status(404).send('Funcionario não encontrado')
            return 
        }

        funcionarios.id = req.body.id
        funcionarios.nome = req.body.nome
        funcionarios.CPF = req.body.CPF
        funcionarios.endereco = req.body.endereco
        
        
        // res.status(200).send(bdFuncionarios)
        res.send(bdFuncionarios)
    }

    // ROTA DELETE
    static deletar(req, res) {
        const funcionarios = bdFuncionarios.find(funcionarios => funcionarios.id === req.params.id)

        if (!funcionarios) {
            res.send("funcionario não encontrado")
            return
        }

        const index = bdFuncionarios.indexOf(funcionarios);
        bdFuncionarios.splice(index, 1);
        res.send({
            "Mensagem": `O funcionario do id ${funcionarios.id} foi deletado!`
        });
    }


}


export default funcionariosController
