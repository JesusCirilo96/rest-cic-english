connection = require('../connection');

let parcialInt = {};

parcialInt.saveParcialInt = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_PARCIAL_INT('"+data+"')",
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

module.exports = parcialInt;
