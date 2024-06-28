import usuarioValidacao from '../validacao/validacao.js'
import UsuarioRepository from '../repositories/UsuarioRepository.js'

class UsuarioController {

    async index(req, res) {
        const rows = await UsuarioRepository.findAll();
        res.json(rows)
    }

    async show(req, res) {
        const id = req.params.id;
        const row = await UsuarioRepository.findById(id);
        res.json(row)
    }

    async store(req, res) {
        const usuario = req.body
        // Validando os dados de entrada
        const { error, value } = usuarioValidacao.validate(usuario);
        
        if (error) {
             return res.status(400).json({ error: error.details });
         }
        
         // Convertendo a data de nascimento para o formato YYYY-MM-DD
         value.data_nascimento = new Date(value.data_nascimento).toISOString().split('T')[0];
        
        const row = await UsuarioRepository.create(usuario);
        res.json(row);
    }

    async update(req, res) {
        const id = req.params.id;
        const usuario = req.body;
        
        // // Validando os dados de entrada
        // const { error, value } = usuarioValidacao.validate(usuario);
        
        // if (error) {
        //     return res.status(400).json({ error: error.details });
        // }
        
        // // Convertendo a data de nascimento para o formato YYYY-MM-DD
        // value.data_nascimento = new Date(value.data_nascimento).toISOString().split('T')[0];
        
        const row = await UsuarioRepository.update(usuario, id);
        res.json(row);
    }

    async delete(req, res) {
        const id = req.params.id;
        const row = await UsuarioRepository.delete(id);
        res.json(row);
    }
}

export default new UsuarioController();
