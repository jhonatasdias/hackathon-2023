const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

/*------- API -------- */
// Configuracao da Rota geral
// /admin/candidatos => GET
router.get('/reports', adminController.getCandidatos);

// /admin/candidatos/:id => GET (Pesquisa por ID)
router.get('/reports/:id(\\d+)', adminController.getIdCandidatos);

// /admin/cadidatos/status => (pesquisa por categoria, aprovados e não aprovados)
/* router.get('/reports/:status', adminController.getStatusCandidatos); */

module.exports = router;