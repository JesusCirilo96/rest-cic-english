const Docente = require('../models/Docente');

module.exports = function(app){
    
    app.get('/docente', (req, response)=>{
        Docente.getDocente((err, data)=>{
            response.status(200).json(data[0]);
        });
    });

    app.post('/docente', (req, response)=>{
        //console.log(req.body.dato);

        var modificacion = req.body.modificacion;
        var docente_id = req.body.docente_id;

        if(modificacion === 'P'){
            var password = req.body.passwordA;
            const data = {
                MODIFICACION: modificacion,
                ID: docente_id,
                PASSWORDN:req.body.passwordN
            }
            connection.query('SELECT CONTRASENA FROM docente WHERE DOCENTE_ID = ?',[docente_id], function (error, results, fields) {
                if (error) {
                    // console.log("error ocurred",error);
                    response.send({
                        "code":400,
                        "success": false,
                        "msg":"Ocurrio un error al conectar con la base de datos"
                    })
                }else{
                    // console.log('The solution is: ', results);
                    if(results.length >0){
                        if(results[0].CONTRASENA == password){
                            Docente.saveDocente(JSON.stringify(data), (err, data)=>{
                                if(data){
                                    response.send({
                                        "code":400,
                                        "success": true,
                                        "msg":"Se Actualizo la contraseña"
                                    })
                                }else{
                                    response.status(500).json({
                                        "success": false,
                                        "msg": 'Error'
                                    });
                                }
                            });
                        }else{
                            response.send({
                                "code":204,
                                "success":false,
                                "msg":"La contraseña introducida no coincide con tu contraseña actual"
                            });
                        }
                    }else{
                        response.send({
                            "code":204,
                            "success":false,
                            "msg":"No se encuentra el usuario"
                        });
                    }
                }
            });
        }
        if (modificacion === 'D' || modificacion === 'S'){
            const data = {
                MODIFICACION: req.body.modificacion,
                ID: req.body.id,
                NOMBRE: req.body.nombre,
                APP: req.body.apellido_pat,
                APM: req.body.apellido_mat,
                NIVEL_ACCESO: req.body.nivel_acceso,
                EMAIL: req.body.email,
                TELEFONO:req.body.telefono
            };
            Docente.saveDocente(JSON.stringify(data), (err, data)=>{
                if(data){
                    response.send({
                        "code":400,
                        "success": true,
                        "msg":"Se guardaron los datos del Docente"
                    })
                }else{
                    response.status(500).json({
                        "success": false,
                        "msg": 'Internal server error'
                    });
                }
            });
        }
    });
}