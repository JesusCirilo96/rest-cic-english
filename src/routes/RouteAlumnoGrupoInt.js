const alumnoGrupoInt = require('../models/AlumnoGrupoInt');

module.exports = function(app){
    app.post('/alumnogrupoint', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            MATRICULA: req.body.matricula,
            GRUPO_ID: req.body.grupo_id,
        };

        alumnoGrupoInt.saveAlumnoGrupoInt(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Alumno agregado al grupo',
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