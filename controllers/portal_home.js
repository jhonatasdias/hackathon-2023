const { Dados, Formulario } = require('../models/connect_db');

exports.postAddFormulario = (req, res, next) => {

    // recebendo dados do formulario req.body
     // Recebendo dados do formulario req.body
     const nomeCompleto = req.body.nome_completo;
     const nomeMae = req.body.nome_mae;
     const nomePai = req.body.nome_pai;
     const sexo = req.body.sexo;
     const estadoCivil = req.body.estado_civil;
     const grauInstrucao = req.body.grau_instrucao;
     const raca = req.body.raca;
     const dataNascimento = req.body.data_nascimento;
     const nacionalidade = req.body.nacionalidade;
     const paisNascimento = req.body.pais_nascimento;
     const estadoNascimento = req.body.estado_nascimento;
     const cidadeNascimento = req.body.cidade_nascimento;
     const numeroBotina = req.body.numero_botina;
     const numeroCalca = req.body.numero_calca;
     const tamanhoCamisa = req.body.tamanho_camisa;
     const telefone1 = req.body.telefone_1;
     const telefone2 = req.body.telefone_2;
     const email = req.body.email;
     const cep = req.body.cep;
     const estado = req.body.estado;
     const bairro = req.body.bairro;
     const rua = req.body.rua;
     const complemento = req.body.complemento;
     const numeroRG = req.body.numero_rg;
     const emissorRG = req.body.emissor_rg;
     const emissorEstado = req.body.emissor_estado;
     const emissorCidade = req.body.emissor_cidade;
     const emissorData = req.body.emissor_data;
     const cpf = req.body.cpf;
     const numPisPasep = req.body.num_pis_pasep;
     const funcoesId = req.body.funcoes_id;
     const alojado = req.body.alojado;
     const pcd = req.body.pcd;
     const rgUrl = req.body.rg_url;
     const cpfUrl = req.body.cpf_url;
     const curriculoUrl = req.body.curriculo_url;
     const cnhUrl = req.body.cnh_url;
     const reservistaUrl = req.body.reservista_url;
     const parenteNome = req.body.parente_nome;
     const parenteCargo = req.body.parente_cargo;
     const parenteCidade = req.body.parente_cidade;
     const dependenteNome = req.body.dependente_nome;
     const dependenteCPF = req.body.dependente_cpf;
     const dependenteSexo = req.body.dependente_sexo;
     const dependenteDataNascimento = req.body.dependente_data_nascimento;
     const dependenteGrauParentesco = req.body.dependente_grau_parentesco;
 
     // Criando uma instância da classe Formulario com os dados preenchidos
     let formulario = new Formulario(
         nomeCompleto, 
         nomeMae, 
         nomePai,
         sexo,
         estadoCivil,
         grauInstrucao,
         raca,
         dataNascimento,
         nacionalidade,
         paisNascimento,
         estadoNascimento,
         cidadeNascimento,
         numeroBotina,
         numeroCalca,
         tamanhoCamisa,
         telefone1,
         telefone2,
         email,
         cep,
         estado,
         bairro,
         rua,
         complemento,
         numeroRG,
         emissorRG,
         emissorEstado,
         emissorCidade,
         emissorData,
         cpf,
         numPisPasep,
         funcoesId,
         alojado,
         pcd,
         rgUrl,
         cpfUrl,
         curriculoUrl,
         cnhUrl,
         reservistaUrl,
         parenteNome,
         parenteCargo,
         parenteCidade,
         dependenteNome,
         dependenteCPF,
         dependenteSexo,
         dependenteDataNascimento,
         dependenteGrauParentesco
     );
 
    console.log(formulario);
    // Metodo save
    Dados.save(formulario, function (salvoFor) {
        console.log('Formulário salvo: ', salvoFor);
        res.redirect('/');
    });
}

exports.postCadastroLogin = (req, res, next) => {
    
}