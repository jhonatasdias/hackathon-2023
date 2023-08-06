const { Dados } = require('./connect_db');

class CadastroReports {
    constructor (
        nome, 
        descricao,
        centro,
        area,
        image1_url,
        image2_url,
        image3_url,
        latitude,
        longitude
    ) {
        this.nome = nome,
        this.descricao = descricao,
        this.centro = centro,
        this.area = area,
        this.image1_url = '',
        this.image2_url = '',
        this.image3_url = '',
        this.latitude = latitude,
        this.longitude = longitude
    }
}

class Reports {
    static save(reports, callback) {

		let connection = Dados.connect()

		// Inserir formulario
		let sql = "insert into reports set ? ";
		let query = connection.query(sql, reports, function (error, results, fields) {
			if (error) throw error;
			// Atualiza o objeto reports do parametro com o "id" inserido
			reports.id = results.insertId;
			// Retorna pela função de callback
			callback(reports)
		});
		console.log(query.sql)
		// Fecha a conexão.
		connection.end();
	}
}

module.exports = { CadastroReports, Reports }