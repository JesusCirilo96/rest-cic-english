const GrupoAlumnoExt = require('../models/GrupoAlumnoExt');

module.exports = function(app){

    app.post('/getAlumnoExt', (req, response)=>{

        const data ={ 
            GRUPO_ID: req.body.id_grupo
        };
        console.log(data);

        GrupoAlumnoExt.getGrupoAlumnoExt(JSON.stringify(data),(err, data)=>{
            response.status(200).json(data[0]);
        });
    });
    
}