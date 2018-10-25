connection = require('../connection');

let usuario = {};

usuario.getUsuario = (callback)=>{
    if(connection){
        connection.query('CALL QUERY_PACIENTE()',
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

usuario.saveUsuario = (usuarioData, callback)=>{
    console.log(usuarioData);
    if(connection){
        connection.query("CALL SAVE_PACIENTE('"+usuarioData+"')",
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



module.exports = usuario;
