const ParcialInt = require('../models/SaveParcialInt');

module.exports = function(app){
    
    app.post('/parcialint', (req, response)=>{
        const data = {
            ASISTENCIA: req.body.asistencia,
            PARTICIPACION: req.body.participacion,
            TRABAJOS: req.body.trabajos,
            EXAMEN: req.body.examen,
            PARCIAL: req.body.parcial,
            MATRICULA: req.body.matricula,
            GRUPO: req.body.grupo
        };

        ParcialInt.saveParcialInt(JSON.stringify(data), (err, data)=>{
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