const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'martinez96',
    database: 'iesit_english_cic'
});

module.exports = connection;