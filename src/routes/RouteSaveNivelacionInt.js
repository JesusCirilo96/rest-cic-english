const NivelacionInt = require('../models/SaveNivelacionInt');

module.exports = function(app){
    
    app.post('/nivelacionint', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            CALIFICACION: req.body.calificacion,
            MATRICULA: req.body.matricula,
            GRUPO: req.body.grupo,
            PARAM: req.body.param
        };

        NivelacionInt.saveNivelacionInt(JSON.stringify(data), (err, data)=>{
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