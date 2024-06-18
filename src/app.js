import express from 'express'

const app = express()

// indicar para express ler body com json
app.use(express.json())

// mock
const usuarios = [
    {id: 1, nome: 'Joao', data_nascimento: '10/02/2006', genero: 'Masculino'},
    {id: 2, nome: 'Pedro', data_nascimento: '08/10/2005', genero: 'Masculino'},
    {id: 3, nome: 'Ilda', data_nascimento: '19/11/1970', genero: 'Feminino'},
]

function buscarUsuarioId(id){
    return usuarios.filter( usurario => usurario.id == id)  
}

function buscarIndexUsuario(id) {
    return usuarios.findIndex( usurario => usurario.id == id)
}

// rotas
app.get('/', (req, res) => {
    res.send('node js')
})

app.get('/registro', (req, res) => {
    res.status(201).send(usuarios)
})

app.get('/registro/:id', (req, res) => {
    // const id = req.params.id
    res.json(buscarUsuarioId(req.params.id))
})

app.post('/registro', (req, res) => {
    usuarios.push(req.body)
    res.status(201).send('Selecao cadastrada com suceso')
})

app.put('/registro/:id', (req, res) => {
    let index = buscarIndexUsuario(req.params.id)
    usuarios[index].nome = req.body.nome
    usuarios[index].data_nascimento = req.body.data_nascimento
    usuarios[index].genero = req.body.genero
    res.json(usuarios)
})

app.delete('/registro/:id', (req, res) => {
    let index = buscarIndexUsuario(req.params.id)
    usuarios.splice(index, 1)
    res.status(201).send(`Usuario excluido com suceso`)
})

export default app
