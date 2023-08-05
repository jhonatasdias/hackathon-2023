const express = require('express');
const path = require('path');

const portalHomeController = require('../controllers/portal_home');

const router = express.Router();

// Routers
// / => GET
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','index.html'));
    console.log('Acessando Index.html');
})

// / => GET
router.get('/cadastrocandidatos', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','cadastrocandidatos.html'));
    console.log('Acessando cadastrocandidatos.html');
})

// / => GET
router.get('/cadastroreports', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','cadastroreports.html'));
    console.log('Acessando Index.html');
})

// / => GET
router.get('/equipamentos', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','equipamentos.html'));
    console.log('Acessando Index.html');
})

// / => GET
router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','login.html'));
    console.log('Acessando Index.html');
})

// Cadastramento dos candidatos
// /formulario => POST
router.post('/formulario', portalHomeController.postAddFormulario);

module.exports = router;