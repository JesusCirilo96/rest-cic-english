connection = require('../connection');

let grupoDocenteExt = {};

grupoDocenteExt.getGrupoDocenteExt = (data, callback)=>{
    if(connection){
        connection.query("CALL GRUPO_DOCENTE_EXT('"+data+"')",
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

module.exports = grupoDocenteExt;
