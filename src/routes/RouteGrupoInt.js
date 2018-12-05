const grupoInt = require('../models/GrupoInt');

module.exports = function(app){
    app.post('/grupoint', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            NOMBRE: req.body.nombre,
            SALON: req.body.salon,
            GRUPO: req.body.grupo,
            MODALIDAD: req.body.modalidad,
            CICLO_ESCOLAR:req.body.ciclo_escolar,
            PERIODO_ESCOLAR:req.body.periodo_escolar,
            TURNO:req.body.turno,
            NIVEL:req.body.nivel,
            DIAS: req.body.dias,
            DOCENTE:req.body.docente,
            ESTADO:req.body.estado,
            HORARIO: req.body.horario,
            ACCION: req.body.accion,
            ID: req.body.id
        };

        grupoInt.saveGrupoInt(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Grupo Interno Agregado',
                    data: data
                });
            }else{
                response.status(500).json({
                    success: false,
                    msg: 'Error'
                });
            }
        });

    });
}