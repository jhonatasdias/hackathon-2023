const mysql = require('mysql');

class Dados {
    static connect() {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'teste',
            password: '1234',
            database: 'talently',
            port: 3306
        })
        // Conecta no banco de dados	
		connection.connect();
		return connection;
    }

    static save(formulario, callback) {

		let connection = Dados.connect()

		// Inserir formulario
		let sql = "insert into formulario set ? ";
		let query = connection.query(sql, formulario, function (error, results, fields) {
			if (error) throw error;
			// Atualiza o objeto formulario do parametro com o "id" inserido
			formulario.id = results.insertId;
			// Retorna o carro pela função de callback
			callback(formulario)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
}

class Formulario {
    constructor(nome_completo, cidade){
        this.nome_completo = nome_completo;
        this.cidade = cidade;
    }
}

module.exports = { Dados, Formulario };