connection = require('../connection');

let alumno = {};

alumno.getAlumno = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_ALUMNO_INT()',
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

alumno.saveAlumno = (data, callback)=>{
    if(connection){
        connection.query("CALL SAVE_ALUMNO('"+data+"')",
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

module.exports = alumno;
