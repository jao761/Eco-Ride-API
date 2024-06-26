import conexao from '../daatabase/conexao.js'

class SelecaoContorller {

    index(req, res) {
        const sql = "SELECT * FROM usuarios;"
        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM usuarios WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0]
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(linha)
            }
        })
    }

    store(req, res) {
        const selecao = req.body
        const sql = "INSERT INTO usuarios SET ?"
        conexao.query(sql, selecao, (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE usuarios SET ? WHERE id=?;"
        conexao.query(sql, [selecao, id], (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM usuarios WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0]
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(linha)
            }
        })
    }
}

// padrao singletton
export default new SelecaoContorller()
