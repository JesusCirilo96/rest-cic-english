const GrupoDocenteExt = require('../models/GrupoDocenteExt');

module.exports = function(app){

    app.post('/getgroupext', (req, response)=>{

        const data = req.body.clave;
        console.log(data);

        GrupoDocenteExt.getGrupoDocenteExt(data,(err, data)=>{
            response.status(200).json(data[0]);
        });
    });
    
}