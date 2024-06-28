import { consulta } from '../database/conexao.js'

class UsuarioRepository {

    create(usuario) {
        const sql = "INSERT INTO usuarios SET ?;";
        return consulta(sql, usuario, 'Não foi possivel cadastrar')
    }
    
    findAll() {
        const sql = "SELECT * FROM usuarios;"
        return consulta(sql, 'Não foi possivel localizar')
    }

    findById(id) {
        const sql = "SELECT * FROM usuarios WHERE id=?;"
        return consulta(sql, id, 'Não foi possivel localizar')
    }

    update(usuario, id) {
        const sql = "UPDATE usuarios SET ? WHERE id=?;"
        return consulta(sql, [usuario, id], 'Não foi posivel atualizar')
    }

    delete(id) {
        const sql = "DELETE FROM usuarios WHERE id=?;"
        return consulta(sql, id, 'não foi possivel apagar')
    }
}

export default new UsuarioRepository()
