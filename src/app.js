import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

// ROTAS
app.get('/registro', SelecaoController.index)
app.get('/registro/:id', SelecaoController.show)
app.post('/registro', SelecaoController.store)
app.put('/registro/:id', SelecaoController.update)
app.delete('/registro/:id', SelecaoController.delete)

export default app