connection = require('../connection');

let alumnoGrupoInt = {};

alumnoGrupoInt.saveAlumnoGrupoInt = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_ALUMNO_GRUPO_INT('"+data+"')",
            (error, result)=>{
                if(error){
                    if(error.errno===1062){
                        callback(null,{
                            'success':false,
                            'msg': 'El Alumno ya esta Inscrito a este curso'
                        })
                    }
                    else{
                        callback(null,{
                            'success':false,
                            'msg': error
                        })
                    }
                   //throw error;
                }else{
                    callback(null, {
                        'success': true,
                        'msg': 'Alumno Agregado Correctamente'
                    })
                }
            }
        )
    }
}

module.exports = alumnoGrupoInt;
