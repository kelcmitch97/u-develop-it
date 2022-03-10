const mysql = require('mysql2');

// Connet to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Lambeau#2021',
        database: 'election'
    },
    console.log("Connected to the election database")
);

module.exports = db;
