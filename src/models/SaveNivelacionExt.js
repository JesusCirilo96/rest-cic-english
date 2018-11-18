connection = require('../connection');

let nivelacionExt = {};

nivelacionExt.saveNivelacionExt = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_NIVELACION_EXTERNO('"+data+"')",
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

module.exports = nivelacionExt;
