const express = require('express');
const app  = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');


//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
//settings

app.set('port', process.env.PORT || 3000);

//middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes

require('./routes/RouteUsuario')(app);

//catalogos
require('./routes/RouteDocente')(app);
require('./routes/RouteNivel')(app);
require('./routes/RouteLicenciatura')(app);
require('./routes/RouteGrupoInt')(app);

//externos
require('./routes/RouteGrupoDocenteExt')(app);
require('./routes/RouteGrupoAlumnoExt')(app);
require('./routes/RouteSaveNivelacionExt')(app);
require('./routes/RouteSaveParcialExt')(app);
//internos
require('./routes/RouteGrupoDocenteInt')(app);
require('./routes/RouteGrupoAlumnoInt')(app);
require('./routes/RouteSaveNivelacionInt')(app);
require('./routes/RouteSaveParcialInt')(app);
require('./routes/RouteGrupoInt')(app);

//message
app.listen(app.get('port'), () =>{
    console.log('server on port 3000');
})
