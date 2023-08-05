const { query } = require('express');
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

    static getDados(callback) {
        let connection = Dados.connect();

        let sql = "select * from formulario";
        let query = connection.query(sql, function(error, results, fields) {
            if(error) throw error;
            // Retorna dados pela função callback

            callback(results);
        });
        console.log(query.sql);
        // Fecha a conexão
        connection.end();
    }

    // Retorna o formulario(id)
	static getById(id, callback) {
		let connection = Dados.connect()
		// Cria uma consulta
		let sql = "select * from formulario where id=?";
		let query = connection.query(sql, id, function (error, results, fields) {
			if (error) throw error;
			if(results.length == 0) {
				console.log("Nenhum formulario encontrado.")
				return
			}
			// Encontrou o formulario
			let fomulario = results[0];
			// Retorna o formulario pela função de callback
			callback(fomulario)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}

    static getByStatus(status, callback) {

        let connection = Dados.connect()
        // Cria uma consulta
        let sql = "select id,nome_completo,cidade,candidato_status from formulario where candidato_status = '" + status + "'";
        let query = connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            // Retorna os dados pela função de callback
            callback(results)
        });
        console.log(query.sql)
        // Fecha a conexão.
        connection.end();
    }
}

class Formulario {
    constructor(nome_completo, cidade, candidato_status){
        this.nome_completo = nome_completo;
        this.cidade = cidade;
        this.candidato_status = candidato_status;
    }
}

module.exports = { Dados, Formulario };