import Cliente from '../models/cliente.js'
import Fornecedores from '../models/fornecedores.js'
import Funcionarios from '../models/funcionarios.js'


const bdCliente =[]
const bdFornecedor =[]
const bdFuncionarios =[]

//cliente//

const cliente = new Cliente(1, 'Eugenio oliveira', 'eugenio.oliveira@bol.com.br', 'eugeninhooliveira')
bdCliente.push(cliente)

const cliente2 = new Cliente(2, 'Oliveira Ribeiro', 'oliveira.ribeiro@gmail.com', 'ribeirinho')
bdCliente.push(cliente2)

const cliente3 = new Cliente(3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', 'aboboradedoce')
bdCliente.push(cliente3)

//funcionarios//

const funcionarios = new Funcionarios (1, 'Eugenio oliveira', '15416512326', 'eugenio.oliveira@bol.com.br', 'eugeninhooliveira', 'Gerente Administrativo', new Date())
bdFuncionarios.push(funcionarios)

const funcionarios2 = new Funcionarios(2, 'Oliveira Ribeiro', '23457895412', 'oliveira.ribeiro@gmail.com', 'ribeirinho', 'Diretora', new Date())
bdFuncionarios.push(funcionarios2)

const funcionarios3 = new Funcionarios(3, 'Mirtes Faria Lima', '75964812543', 'mirtes_fl@yahoo.com', 'aboboradedoce', 'Gerente Financeiro', new Date())
bdFuncionarios.push(funcionarios3)

//fornecedores//

const fornecedores = new Fornecedores(222055446881, 'Alan Ferreira', 'Belo Horizonte', 'Minas Gerais', new Date())
bdFornecedores.push(fornecedores)

const fornecedores2 = new Fornecedores(211005119632, 'Gabriel Faria', 'Rio De Janeiro', 'Rio De Janeiro', new Date())
bdFornecedores.push(fornecedores2)

const fornecedores3 = new Fornecedores(200544863547, 'Victor Barbosa', 'Campo Grande', 'Mato Grosso Do Sul', new Date())
bdFornecedores.push(fornecedores3)


export {bdFornecedores, bdFuncionarios, bdCliente}
