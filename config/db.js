const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
    console.log((process.env.DB_HOST))
});

module.exports = connection;
