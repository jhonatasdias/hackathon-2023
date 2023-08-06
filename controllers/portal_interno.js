const { CadastroReports, Reports } = require('../models/reports_db');



exports.postAddEquipamentos = (req, res, next) => {

    // Recebendo dados do formulario req.body
    /* const nome = req.body.nome;
    

    let reports = new CadastroReports (
        
    )

    Reports.save(reports, function(salvoRep){
        console.log('Reports salvo:', salvoRep);
    }); */
    res.redirect('/interno/inicio');
}

// base64