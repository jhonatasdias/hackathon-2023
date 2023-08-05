const { Dados, Formulario } = require('../models/connect_db');

// API
// Consulta Geral
exports.getCandidatos = (req, res, next) => {
    console.log('Estou no admin');
    Dados.getDados(function (resultado){
        res.json(resultado);
        console.log(resultado);
    });
}

exports.getIdCandidatos = (req, res, next) => {
    let id = req.params.id;
    Dados.getById(id, function(resultado){
        res.json(resultado);
        console.log(resultado);
    })
}

exports.getStatusCandidatos = (req, res, next) => {
    let status = req.params.status;
    Dados.getByStatus(status, function(resultado){
        res.json(resultado);
        console.log(resultado);
    })
}