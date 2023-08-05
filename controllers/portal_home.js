const { Dados, Formulario } = require('../models/connect_db');

exports.postAddFormulario = (req, res, next) => {
    const nomeCompleto = req.body.nome_completo;
    console.log(nomeCompleto);
    const cidade = req.body.cidade;
    console.log(cidade);
    let formulario = new Formulario(nomeCompleto, cidade);
    console.log(formulario);
    // Metodo save
    Dados.save(formulario, function (salvoFor) {
        console.log('Formulário salvo: ', salvoFor);
        res.redirect('/');
    });
}





