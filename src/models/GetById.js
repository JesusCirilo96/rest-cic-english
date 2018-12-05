connection = require('../connection');

let getById = {};
getById.getById = (data, callback)=>{
    if(connection){
        connection.query("CALL GET_ID('"+data+"')",
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

module.exports = getById;
