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

// Cadastramento dos candidatos
// /formulario => POST
router.post('/formulario', portalHomeController.postAddFormulario);

module.exports = router;