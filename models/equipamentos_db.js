const { Dados } = require('./connect_db');

class CadastroEquipamentos {
    constructor (
        descricao,
        codigo,
        liberado,
        arquivo_id
    ){
        this.descricao = descricao;
        this.codigo = codigo;
        this.liberado = liberado;
        this.arquivo_id = arquivo_id;
    }
}

class Equipamentos {
    static save(equipamentos, callback) {

		let connection = Dados.connect()

		// Inserir formulario
		let sql = "insert into equipamentos set ? ";
		let query = connection.query(sql, equipamentos, function (error, results, fields) {
			if (error) throw error;
			// Atualiza o objeto equipamentos do parametro com o "id" inserido
			equipamentos.id = results.insertId;
			// Retorna pela função de callback
			callback(equipamentos)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
}

module.exports = { CadastroEquipamentos, Equipamentos }