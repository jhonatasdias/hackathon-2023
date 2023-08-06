const express = require('express');
const path = require('path');
const multer = require('multer');

const { Dados } = require('../models/connect_db');

// Configuração do multer para upload de arquivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

// /cadastroreports => GET
router.get('/cadastroreports', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','cadastroreports.html'));
    console.log('Acessando cadastroreports.html');
})

// /reports => POST
router.post('/reports', portalHomeController.postAddReports);

// /equipamentos => GET
router.get('/equipamentos', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','equipamentos.html'));
    console.log('Acessando equipamentos.html');
})

// /login => GET
router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','login.html'));
    console.log('Acessando login.html');
})

// Cadastramento dos candidatos
// /formulario => POST
router.post('/formulario', portalHomeController.postAddFormulario);

/* Router para testes => GET */
router.get('/teste', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'teste.html'));
})

db = Dados.connect();

/* Router para testes => POST */
router.post('/upload', upload.single('arquivo'), (req, res) => {
    const arquivo = req.file;
    const nomeArquivo = arquivo.originalname;
    const tipoMIME = arquivo.mimetype;
    const dadosArquivo = arquivo.buffer;

    // Insira os dados no banco de dados
    const query = 'INSERT INTO arquivos (nome_arquivo, tipo_mime, dados_arquivo) VALUES (?, ?, ?)';
    db.query(query, [nomeArquivo, tipoMIME, dadosArquivo], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao inserir arquivo no banco de dados.');
        }
        console.log(query);
        res.status(200).send('Arquivo enviado com sucesso.');
    });
});

module.exports = router;