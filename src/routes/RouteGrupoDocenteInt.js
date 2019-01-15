const GrupoDocenteInt = require('../models/GrupoDocenteInt');

module.exports = function(app){

    app.post('/getgroupint', (req, response)=>{

        const data = {
            DOCENTE_ID: req.body.clave
        }
        GrupoDocenteInt.getGrupoDocenteInt(JSON.stringify(data),(err, data)=>{
            response.status(200).json(data[0]);
        });
    });
    
}