connection = require('../connection');

let docente = {};

docente.getDocente = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_DOCENTE()',
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

docente.saveDocente = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_DOCENTE('"+data+"')",
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

module.exports = docente;
