connection = require('../connection');

let alumnoGrupoInt = {};

alumnoGrupoInt.saveAlumnoGrupoInt = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_ALUMNO_GRUPO_INT('"+data+"')",
            (error, result)=>{
                if(error){
                    throw error;
                }
                else{
                    callback(null, {
                        'msg': 'ok'
                    })
                }
            }
        )
    }
}

module.exports = alumnoGrupoInt;
