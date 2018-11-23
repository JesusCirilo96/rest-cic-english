const Licenciatura = require('../models/Licenciatura');

module.exports = function(app){
    
    app.get('/licenciatura', (req, response)=>{
        Licenciatura.getLicenciatura((err, data)=>{
            response.status(200).json(data[0]);
        });
    });

    app.post('/licenciatura', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            NOMBRE: req.body.nombre,
            SIGLAS: req.body.siglas
        };

        Licenciatura.saveLicenciatura(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Licenciatura Agregada',
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