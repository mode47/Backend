

const pool = require('../config/db');

const express = require('express');

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

const getAllCatygoryItems = async () => {
    const categories= await pool.query(`SELECT * FROM category`);
    return categories;
}
module.exports = {getAllCatygoryItems};


