connection = require('../connection');
const Usuario = require('../models/Usuario');
var jwt = require('jsonwebtoken');

module.exports = function(app){
    
   //login tokens
    app.post('/api/posts', verifyToken, (req, res)=>{
        jwt.verify(req.token, 'secretkey',(err, authData)=>{
            if(err){
                res.sendStatus(403);
            }else{
                res.json({
                    message: "Post created..",
                    access:true,
                    authData
                });  
            }
        });
        
    });

    app.post('/api/login', (req, res)=>{
        var username = req.body.username;
        var password = req.body.password;
        connection.query('SELECT * FROM docente WHERE DOCENTE_ID = ?',[username], function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({
            "code":400,
            "failed":"error ocurred"
            })
        }else{
            // console.log('The solution is: ', results);
            if(results.length >0){
            if(results[0].CONTRASENA == password){
                //mokc user
                res.send({
                    "username": username,
                    "id": results[0].DOCENTE_ID,
                    "access":true,
                    "accessLevel": results[0].NIVEL_ACCESO
                })
            }
            else{
                res.send({
                "code":204,
                "success":"Username and password does not match"
                    });
            }
            }
            else{
            res.send({
                "code":204,
                "success":"Username does not exits"
                });
            }
        }
        });
    });

    /*format of token
    Authorization: Bearer <access_token>
    verify token*/
    function verifyToken(req, res, next){
        //get auth header value
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            //split space
            const bearer = bearerHeader.split(' ');
            //get token
            const bearerToken = bearer[1];
            //set token
            req.token = bearerToken;
            //next middleware
            next();
        }else{
            //Forbidden
            res.sendStatus(403);
        }
    }   
}