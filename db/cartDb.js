const pool = require('../config/db');

const express = require('express');

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

const createCart =async(userId)=>{
    try{
        const sql = `INSERT INTO cart (user_id) VALUES (?)`;
        const [result]=await pool.execute(sql, [userId]);
        console.log("Cart created successfully for user ID:", userId);
        return result;
    }catch(err){
        console.error("Error creating cart:", e.message);
        throw e; // Re-throw the error for upstream handling
    }
}

module.exports = {createCart};