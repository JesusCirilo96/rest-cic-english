connection = require('../connection');

let periodo = {};

periodo.getPeriodo = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_PERIODO_ESCOLAR()',
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

periodo.savePeriodo = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_PERIODO_ESCOLAR('"+data+"')",
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

module.exports = periodo;
