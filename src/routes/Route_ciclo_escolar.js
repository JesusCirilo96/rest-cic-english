const Ciclo = require('../models/Ciclo_escolar');

module.exports = function(app){
    
    app.get('/cicloescolar', (req, response)=>{
        Ciclo.getCiclo((err, data)=>{
            response.status(200).json(data[0]);
        });
    });

    app.post('/cicloescolar', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            NOMBRE_CORTO: req.body.nombre_corto,
            NOMBRE: req.body.nombre,
        };

        Ciclo.saveCiclo(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Ciclo Escolar Agregado',
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