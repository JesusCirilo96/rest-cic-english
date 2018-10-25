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
require('./routes/RouteDocente')(app);
require('./routes/RouteNivel')(app);

//message
app.listen(app.get('port'), () =>{
    console.log('server on port 3000');
})
