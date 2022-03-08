const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// mysql2
const mysql = require('mysql2');


// Middleware
app.use(express.urlencoded({ extended: false }));

// Connet to Database
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password:'Lambeau#2021',
        database: 'election'
    },
    console.log("Connected to the election database")
);

app.use(express.json());

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});