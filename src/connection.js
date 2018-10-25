const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'martinez96',
    database: 'cic_english'
});

module.exports = connection;