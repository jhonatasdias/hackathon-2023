const { query } = require('express');
const mysql = require('mysql');

class Dados {
    static connect() {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'teste',
            password: '1234',
            database: 'hackathon',
            port: 3306
        })
        // Conecta no banco de dados	
		connection.connect();
		return connection;
    }

    static save(formulario, callback) {

		let connection = Dados.connect()

		// Inserir formulario
		let sql = "insert into candidatos set ? ";
		let query = connection.query(sql, formulario, function (error, results, fields) {
			if (error) throw error;
			// Atualiza o objeto formulario do parametro com o "id" inserido
			formulario.id = results.insertId;
			// Retorna pela função de callback
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

// Classe do formulário
class Formulario {
    constructor(
        nome_completo, 
        nome_mae, 
        nome_pai,
        sexo,
        estado_civil,
        grau_instrucao,
        raca,
        data_nascimento,
        nacionalidade,
        pais_nascimento,
        estado_nascimento,
        cidade_nascimento,
        numero_botina,
        numero_calca,
        tamanho_camisa,
        telefone_1,
        telefone_2,
        email,
        cep,
        estado,
        bairro,
        rua,
        complemento,
        numero_rg,
        emissor_rg,
        emissor_estado,
        emissor_cidade,
        emissor_data,
        cpf,
        num_pis_pasep,
        funcoes_id,
        alojado,
        pcd,
        anexo_rg_url,
        anexo_cpf_url,
        anexo_curriculo_url,
        anexo_cnh_url,
        anexo_reservista_url,
        parente_nome,
        parente_cargo,
        parente_cidade,
        dependente_nome,
        dependente_cpf,
        dependente_sexo,
        dependente_data_nascimento,
        dependente_grau_parentesco,
        ){
            this.nome_completo = nome_completo;
            this.nome_mae = nome_mae;
            this.nome_pai = nome_pai;
            this.sexo = sexo;
            this.estado_civil = estado_civil;
            this.grau_instrucao = grau_instrucao;
            this.raca = raca;
            this.data_nascimento = data_nascimento;
            this.nacionalidade = nacionalidade;
            this.pais_nascimento = pais_nascimento;
            this.estado_nascimento = estado_nascimento;
            this.cidade_nascimento = cidade_nascimento;
            this.numero_botina = numero_botina;
            this.numero_calca = numero_calca;
            this.tamanho_camisa = tamanho_camisa;
            this.telefone_1 = telefone_1;
            this.telefone_2 = telefone_2;
            this.email = email;
            this.cep = cep;
            this.estado = estado;
            this.bairro = bairro;
            this.rua = rua;
            this.complemento = complemento;
            this.numero_rg = numero_rg;
            this.emissor_rg = emissor_rg;
            this.emissor_estado = emissor_estado;
            this.emissor_cidade = emissor_cidade;
            this.emissor_data = emissor_data;
            this.cpf = cpf;
            this.num_pis_pasep = num_pis_pasep;
            this.funcoes_id = funcoes_id;
            this.alojado = alojado;
            this.pcd = pcd;
            this.anexo_rg_url = anexo_rg_url;
            this.anexo_cpf_url = anexo_cpf_url;
            this.anexo_curriculo_url = anexo_curriculo_url;
            this.anexo_cnh_url = anexo_cnh_url;
            this.anexo_reservista_url = anexo_reservista_url;
            this.parente_nome = parente_nome;
            this.parente_cargo = parente_cargo;
            this.parente_cidade = parente_cidade;
            this.dependente_nome = dependente_nome;
            this.dependente_cpf = dependente_cpf;
            this.dependente_sexo = dependente_sexo;
            this.dependente_data_nascimento = dependente_data_nascimento;
            this.dependente_grau_parentesco = dependente_grau_parentesco;
    }
}

module.exports = { Dados, Formulario };