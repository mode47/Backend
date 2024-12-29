const pool = require('../config/db');

const express = require('express');

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

// create new user ;

const createUser = async (username, email, password) => {
    try{
        const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
        const [result]=await pool.execute(sql, [username, email, password]);
        console.log("result: " + result);
        return result;
    }catch(e) {
        return res.status(500).json({ message: e.message });
    }
}

const findUserByEmail= async(email)=>{
    const sql = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await pool.execute(sql,[email]);
    return rows[0];


}
module.exports ={createUser,findUserByEmail};