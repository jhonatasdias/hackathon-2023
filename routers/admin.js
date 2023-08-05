const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// Configuracao da Rota geral
// /admin/candidatos => GET
router.get('/candidatos', adminController.getCandidatos);

// /admin/candidatos/:id => GET (Pesquisa por ID)
router.get('/candidatos/:id(\\d+)', adminController.getIdCandidatos);

// /admin/cadidatos/status => (pesquisa por categoria, aprovados e não aprovados)
router.get('/candidatos/:status', adminController.getStatusCandidatos);

module.exports = router;