connection = require('../connection');

let GrupoAlumnoExt = {};

GrupoAlumnoExt.getGrupoAlumnoExt = (data, callback)=>{
    if(connection){
        connection.query("CALL ALUMNO_GRUPO_EXTERNO('"+data+"')",
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

module.exports = GrupoAlumnoExt;
