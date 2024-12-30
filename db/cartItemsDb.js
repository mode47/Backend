


const pool = require('../config/db');

const express = require('express');

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());
const addItem=async({ user_id, food_id, quantity, price })=>{
    const [rows]=await pool.query( 'INSERT INTO cart_items (user_id, food_id, quantity, price) VALUES (?, ?, ?, ?)',
        [user_id, food_id, quantity, price]
    );
    return rows;    
}

const getItemById = async(user_id)=>{
    //get item by id
    const [rows]=await pool.query( 'SELECT * FROM cart_items WHERE user_id =?', [user_id] );
    return rows
    ;
}
const updateItemById=async(user_id)=>{
    //update item by id
    const [rows]=await pool.query( 'UPDATE cart_items SET quantity = quantity + 1 WHERE user_id =?', [user_id] );
    return rows;
}

const deleteItemById=async(id)=>{
    //delete item by id
    const [rows]=await pool.query( 'DELETE FROM cart_items WHERE id =?', [id] );
    return rows;
}

const getAllICartItems=async()=>{
    //get all items
    const [rows]=await pool.query( 'SELECT * FROM cart_items' );
    return rows;
}

module.exports={addItem,getItemById,deleteItemById,getAllICartItems};