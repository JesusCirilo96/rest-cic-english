const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'martinez96',
    database: 'prueba'
});

module.exports = connection;