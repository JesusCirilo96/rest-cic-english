const NivelacionExt = require('../models/SaveNivelacionExt');

module.exports = function(app){
    
    app.post('/nivelacionext', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            CALIFICACION: req.body.calificacion,
            ALUMNO_ID: req.body.alumno_id,
            GRUPO: req.body.grupo,
            PARAM: req.body.param
        };

        NivelacionExt.saveNivelacionExt(JSON.stringify(data), (err, data)=>{
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