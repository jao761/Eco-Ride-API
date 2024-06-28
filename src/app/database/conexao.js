import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'ecoride'
})

conexao.connect()

/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql instrucao sql a ser excutada
 * @param {string=id | [usuario , id]} valores s serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores,(erro, resultado) => {
            if(erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default conexao