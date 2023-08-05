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

    static save(carro, callback) {

		let connection = Dados.connect()

		// Insere o carro
		let sql = "insert into formulario set ? ";
		let query = connection.query(sql, carro, function (error, results, fields) {
			if (error) throw error;
			// Atualiza o objeto carro do parametro com o "id" inserido
			carro.id = results.insertId;
			// Retorna o carro pela função de callback
			callback(carro)
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