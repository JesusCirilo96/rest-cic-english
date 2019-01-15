const Alumno = require('../models/AlumnoExterno');

module.exports = function(app){

    app.get('/alumnoext', (req, response)=>{
        Alumno.getAlumno((err, data)=>{
            response.status(200).json(data[0]);
        });
    });
    
    app.post('/alumnoext', (req, response)=>{
        //console.log(req.body.dato);

        const data = {
            MODIFICACION: req.body.modificacion,
            ID: req.body.id,
            MATRICULA: req.body.matricula,
            NOMBRE: req.body.nombre,
            APP: req.body.apellido_pat,
            APM: req.body.apellido_mat,
            ESTADO: req.body.estado,
            LICENCIATURA: req.body.licenciatura,
            SEMESTRE: req.body.semestre,
            GRUPO: req.body.grupo,
            EMAIL: req.body.email,
            GRUPO_ID: req.body.grupo_int
        };

        Alumno.saveAlumno(JSON.stringify(data), (err, data)=>{
            if(data){
                response.json({
                    success: true,
                    msg: 'Alumno Agregado',
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