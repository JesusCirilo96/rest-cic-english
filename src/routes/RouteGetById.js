const GetById = require('../models/GetById');

module.exports = function(app){

    app.post('/getbyid', (req, response)=>{

        const data = { 
            TBL:req.body.tbl,
            ID:req.body.id
        };

        GetById.getById(JSON.stringify(data),(err, data)=>{
            response.status(200).json(data[0]);
        });
    });
    
}