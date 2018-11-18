const ParcialExt = require('../models/SaveParcialExt');

module.exports = function(app){
    
    app.post('/parcialext', (req, response)=>{
        const data = {
            ASISTENCIA: req.body.asistencia,
            PARTICIPACION: req.body.participacion,
            TRABAJOS: req.body.trabajos,
            EXAMEN: req.body.examen,
            PARCIAL: req.body.parcial,
            ALUMNO_ID: req.body.alumno_id,
            GRUPO: req.body.grupo
        };

        ParcialExt.saveParcialExt(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Calificacion Actualizada',
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