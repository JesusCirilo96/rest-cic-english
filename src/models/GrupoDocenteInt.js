connection = require('../connection');

let grupoDocenteInt = {};

grupoDocenteInt.getGrupoDocenteInt = (data, callback)=>{
        connection.query("CALL GRUPO_DOCENTE_INT('"+data+"')",
            (err, rows)=>{
                if(err){
                    throw err;
                }else{
                    callback(null, rows);
                }
            }
        )
};
module.exports = grupoDocenteInt;
