const GrupoDocenteInt = require('../models/GrupoDocenteInt');

module.exports = function(app){

    app.post('/getgroupint', (req, response)=>{

        const data = {
            OPCION: req.body.opcion,
            DOCENTE_ID: req.body.clave,
            PERIODO_ID: req.body.periodo_id
        }
        GrupoDocenteInt.getGrupoDocenteInt(JSON.stringify(data),(err, data)=>{
            response.status(200).json(data[0]);
        });
    });
    
}