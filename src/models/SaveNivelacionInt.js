connection = require('../connection');

let nivelacionInt = {};

nivelacionInt.saveNivelacionInt = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_NIVELACION_INTERNO('"+data+"')",
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

module.exports = nivelacionInt;
