
const pool = require('../config/db');

const express = require('express');

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

const getAllFoodItems = async () => {
    console.log('Getting all food items test');
    const foodItems = await pool.query('SELECT * FROM food_items');

    return foodItems;
};

async function getFoodItemById(id) {
    const [foodItem] = await pool.query('SELECT * FROM food_items WHERE id = $1', [id]);
    return foodItem;
}


async function addFoodItem(name, price, description, categoryId) {
    const [result] = await pool.query(
        'INSERT INTO food_items (name, price, description, category_id) VALUES (?, ?, ?, ?)',
        [name, price, description, categoryId]
    );
    return result.insertId;
}
module.exports={getAllFoodItems,addFoodItem};




