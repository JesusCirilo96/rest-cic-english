const Periodo = require('../models/Periodo_escolar');

module.exports = function(app){
    
    app.get('/periodoescolar', (req, response)=>{
        Periodo.getPeriodo((err, data)=>{
            response.status(200).json(data[0]);
        });
    });

    app.post('/periodoescolar', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            NOMBRE_CORTO: req.body.nombre_corto,
            NOMBRE: req.body.nombre,
        };

        Periodo.savePeriodo(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Periodo Agregado',
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