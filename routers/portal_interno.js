const express = require('express');
const path = require('path');

const router = express.Router();

// /interno/inicio => GET
router.get('/inicio', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','inicio.html'));
    console.log('Acessando inicio.html');
})

// /interno/candidatosinterno => GET
router.get('/candidatosinterno', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','candidatosinterno.html'));
    console.log('Acessando candidatosinterno.html');
})

// /interno/reportsinterno => GET
router.get('/reportsinterno', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','reportsinterno.html'));
    console.log('Acessando reportsinterno.html');
})

// /interno/solicitacoes => GET
router.get('/solicitacoes', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','solicitacoes.html'));
    console.log('Acessando solicitacoes.html');
})



module.exports = router;