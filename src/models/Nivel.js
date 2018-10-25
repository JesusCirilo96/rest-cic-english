connection = require('../connection');

let nivel = {};

nivel.getNivel = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_NIVEL()',
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

nivel.saveNivel = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_NIVEL('"+data+"')",
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

module.exports = nivel;
