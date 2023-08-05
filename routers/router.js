const express = require('express');
const path = require('path');
const { Dados, Formulario } = require('../models/connect_db');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','index.html'));
    console.log('Acessando Index.html');
})

router.post('/formulario', (req, res, next) => {
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
});

module.exports = router;