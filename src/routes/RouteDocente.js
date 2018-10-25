const Docente = require('../models/Docente');

module.exports = function(app){
    
    app.get('/docente', (req, response)=>{
        Docente.getDocente((err, data)=>{
            response.status(200).json(data[0]);
        });
    });

    app.post('/docente', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            NOMBRE: req.body.nombre,
            APP: req.body.apellido_pat,
            APM: req.body.apellido_mat,
            ESTADO: req.body.estado,
            NIVEL_ACCESO: req.body.nivel_acceso,
            EMAIL: req.body.email
        };

        Docente.saveDocente(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Docente Agregado',
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