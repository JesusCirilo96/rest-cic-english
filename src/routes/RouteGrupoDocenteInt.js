const GrupoDocenteInt = require('../models/GrupoDocenteInt');

module.exports = function(app){

    app.post('/getgroupint', (req, response)=>{

        const data = req.body.clave;
        console.log(data);

        GrupoDocenteInt.getGrupoDocenteInt(data,(err, data)=>{
            response.status(200).json(data[0]);
        });
    });
    
}