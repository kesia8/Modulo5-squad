import express from "express"

const app = express()

app.use(express.json())

import clienteController from './src/controllers/clientescontrollers.js'
import fornecedorController from './src/controllers/fornecedorescontrollers.js'
import funcionariosController from './src/controllers/funcionarioscontrollers.js'

clienteController.rotas(app)
fornecedorController.rotas(app)
funcionariosController.rotas(app)

export default app