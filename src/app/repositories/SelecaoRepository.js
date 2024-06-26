import conexao from '../database/conexao.js'

class SelecaoRepository {

    create(usuario) {
        const sql = "INSERT INTO usuarios SET ?;";
        return new Promise((resolve, reject) => {
            console.log('SQL:', sql)
            console.log('Dados do usuário:', usuario)
            conexao.query(sql, usuario, (erro, resultado) => {
                if (erro) {
                    console.error('Erro ao inserir no banco de dados:', erro)
                    return reject('Não foi possível inserir')
                }
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log('Resultado da inserção:', rows)
                return resolve(rows)
            })
        })
    }
    
    findAll() {
        const sql = "SELECT * FROM usuarios;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,(erro, resultado) => {
                if(erro) return reject('Não foi possível localizar')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM usuarios WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id,(erro, resultado) => {
                if(erro) return reject('Não foi possível localizar')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }

    update(usuario, id) {
        const sql = "UPDATE usuarios SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [usuario, id], (erro, resultado) => {
                if(erro) return reject('Não foi possível atualizar')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM usuarios WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id,(erro, resultado) => {
                if(erro) return reject('Não foi possível deletar')
                const rows = JSON.parse(JSON.stringify(resultado))
                console.log(rows)
                return resolve(rows)
            })
        })
    }
}

export default new SelecaoRepository()
