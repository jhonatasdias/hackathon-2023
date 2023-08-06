const { CadastroEquipamentos, Equipamentos } = require('../models/equipamentos_db');

exports.postAddEquipamentos = (req, res, next) => {

    // Recebendo dados do formulario req.body
    const codigo = req.body.codigo;
    const descricao = req.body.descricao;
    const liberado = req.body.liberado;

    let equipamentos = new CadastroEquipamentos (
        codigo,
        descricao,
        liberado
    )

    Equipamentos.save(equipamentos, function(salvoRep){
        console.log('Reports salvo:', salvoRep);
    });
    res.redirect('/interno/inicio');
}

// base64