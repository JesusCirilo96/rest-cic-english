connection = require('../connection');

let GrupoAlumnoInt = {};

GrupoAlumnoInt.getGrupoAlumnoInt = (data, callback)=>{
    if(connection){
        connection.query("CALL ALUMNO_GRUPO_INTERNO('"+data+"')",
            (err, rows)=>{
                if(err){
                    throw err;
                }else{
                    callback(null, rows);
                }
            }
        )
    }
};

module.exports = GrupoAlumnoInt;
