connection = require('../connection');

let licenciatura = {};

licenciatura.getLicenciatura = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_LICENCIATURA()',
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

licenciatura.saveLicenciatura = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_LICENCIATURA('"+data+"')",
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

module.exports = licenciatura;
