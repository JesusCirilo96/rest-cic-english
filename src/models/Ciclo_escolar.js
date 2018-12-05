connection = require('../connection');

let ciclo = {};

ciclo.getCiclo = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_CICLO_ESCOLAR()',
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

ciclo.saveCiclo = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_CICLO_ESCOLAR('"+data+"')",
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

module.exports = ciclo;
