import { Router } from 'express'
import UsuarioController from './app/controllers/UsuarioController.js'

const router = Router()

// ROTAS
router.get('/registro', UsuarioController.index)
router.get('/registro/:id', UsuarioController.show)
router.post('/registro', UsuarioController.store)
router.put('/registro/:id', UsuarioController.update)
router.delete('/registro/:id', UsuarioController.delete)

export default router