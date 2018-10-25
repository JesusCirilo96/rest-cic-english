const Nivel = require('../models/Nivel');

module.exports = function(app){
    
    app.get('/nivel', (req, response)=>{
        Nivel.getNivel((err, data)=>{
            response.status(200).json(data[0]);
        });
    });

    app.post('/nivel', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            NOMBRE_CORTO: req.body.nombre_corto,
            NOMBRE: req.body.nombre,
        };

        Nivel.saveNivel(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Nivel Agregado',
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