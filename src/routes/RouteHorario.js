const Horario = require('../models/Horario');

module.exports = function(app){
    
    app.get('/horario', (req, response)=>{
        Horario.getHorario((err, data)=>{
            response.status(200).json(data[0]);
        });
    });

    app.post('/horario', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            HORA_INICIO: req.body.hora_inicio,
            HORA_FIN: req.body.hora_fin,
        };

        Horario.saveHorario(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Horario Agregado',
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