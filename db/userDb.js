const pool = require('../config/db');

const express = require('express');

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

// create new user ;

const createUser = async (username, email, password) => {
    try {
      const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      const [result] = await pool.execute(sql, [username, email, password]);
  
      console.log("User created with result:", result);
      return result; // Return the result for further handling
    } catch (e) {
      console.error("Error creating user:", e.message);
      throw e; // Throw the error for upstream handling
    }
  };


const findUserByEmail= async(email)=>{
    const sql = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await pool.execute(sql,[email]);
    return rows[0];


}
module.exports ={createUser,findUserByEmail};