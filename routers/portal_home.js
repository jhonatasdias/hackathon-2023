const express = require('express');
const path = require('path');

const portalHomeController = require('../controllers/portal_home');

const portalInternoController = require('../controllers/portal_interno');

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

// /cadastroreports => GET
router.get('/cadastroreports', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','cadastroreports.html'));
    console.log('Acessando cadastroreports.html');
})

// /reports => POST
router.post('/reports', portalInternoController.postAddReports);

// / => GET
router.get('/equipamentos', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','equipamentos.html'));
    console.log('Acessando equipamentos.html');
})

// / => GET
router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','login.html'));
    console.log('Acessando login.html');
})

// Cadastramento dos candidatos
// /formulario => POST
router.post('/formulario', portalHomeController.postAddFormulario);

// Coordenadas
/* router.get('/enviar_coordenadas', (req, res, next) => {
    res.json(req.body.data);
}) */

module.exports = router;