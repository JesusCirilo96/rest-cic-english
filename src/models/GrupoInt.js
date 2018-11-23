connection = require('../connection');

let grupoInt = {};

grupoInt.saveGrupoInt = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_GRUPO_INT('"+data+"')",
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

module.exports = grupoInt;
