connection = require('../connection');

let parcialExt = {};

parcialExt.saveParcialExt = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_PARCIAL_EXT('"+data+"')",
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

module.exports = parcialExt;
