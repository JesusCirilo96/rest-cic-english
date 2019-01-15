connection = require('../connection');

let alumno = {};

alumno.getAlumno = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_ALUMNO_EXT()',
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
                    if(error.errno === 1062){
                        callback(null,{
                            'success':false,
                            'msg': 'Este Alumno ya esta Registrado'
                        })
                    }else{
                        callback(null,{
                            'success':false,
                            'msg': error
                        })
                    }
                }else{
                    callback(null, {
                        'success':true,
                        'msg': 'Alumno registrado satisfactoriamente'
                    })
                }
            }
        )
    }
}

module.exports = alumno;
