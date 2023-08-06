const { CadastroReports, Reports } = require('../models/reports_db');

exports.postAddReports = (req, res, next) => {

    // Recebendo dados do formulario req.body
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const centro = req.body.centro;
    const area = req.body.area;
    const image1_url = '';
    const image2_url = '';
    const image3_url = '';
    const latitude = '';
    const longitude = '';

    let reports = new CadastroReports (
        nome,
        descricao,
        centro,
        area,
        image1_url,
        image2_url,
        image3_url,
        latitude,
        longitude
    )

    Reports.save(reports, function(salvoRep){
        console.log('Reports salvo:', salvoRep);
    });
    res.redirect('/');
}

// base64