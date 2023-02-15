import express from 'express'

const app = express()

app.use(express.json())

import clienteController from './src/controllers/clientescontrollers.js'
import fornecedoresController from './src/controllers/fornecedorescontrollers.js'
import funcionariosController from './src/controllers/funcionarioscontrollers.js'

clienteController.rotas(app)
fornecedoresController.rotas(app)
funcionariosController.rotas(app)

export default app
