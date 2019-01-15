connection = require('../connection');

let horario = {};

horario.getHorario = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_HORARIO()',
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

horario.saveHorario = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_HORARIO('"+data+"')",
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

module.exports = horario;
