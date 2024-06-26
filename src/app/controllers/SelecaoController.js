import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoContorller {

    async index(req, res) {
       const row = await SelecaoRepository.findAll()
       res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        if(!row){
            res.status(404).json({ Erro: 'Não localizado!'})
        } 
        res.json(row)
    }

    async store(req, res) {
        const usuario = req.body

        // convertendo a data de nascimento para o formarto YYYY-MM-DD
        usuario.data_nascimento = new Date(usuario.data_nascimento).toISOString().split('T')[0]
        try{
             const row = await SelecaoRepository.create(usuario)
             res.json(row)
        } catch (error){
            console.log('Erro ao criar o usuario: ', error)
            res.status(500).json({erro: 'Erro ao criar usuario' })
        }       
    }

    async update(req, res) {
        const id = req.params.id
        const idExiste = await SelecaoRepository.findById(id)
        if(!idExiste){
            return res.status(404).json({Erro: 'Id não existe'})
        }
        const usuario = req.body
        const row = await SelecaoRepository.update(usuario, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const idExiste = await SelecaoRepository.findById(id)
        if(!idExiste){
            return res.status(404).json({Erro: 'Id não existe'})
        }
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }
}

// padrao singletton
export default new SelecaoContorller()
