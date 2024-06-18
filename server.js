import app from './app.js'

const PORT = 3001

//  escutando a porta 
app.listen(PORT, () => {
    console.log(`Servidor na porta http://localhost:${PORT}`)
})
