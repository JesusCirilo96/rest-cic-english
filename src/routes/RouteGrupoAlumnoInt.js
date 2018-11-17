const GrupoAlumnoInt = require('../models/GrupoAlumnoInt');

module.exports = function(app){

    app.post('/getalumnoint', (req, response)=>{

        const data ={ 
            GRUPO_ID: req.body.id_grupo,
            PARAM: req.body.id_param
        };
        console.log(data);

        GrupoAlumnoInt.getGrupoAlumnoInt(JSON.stringify(data),(err, data)=>{
            response.status(200).json(data[0]);
        });
    });
    
}