
// Importing required modules
const express = require('express');
const app = express();
app.use(express.json());
const categorydb=require('../db/categoryDb');

//get all categories from category database and add them to category collection in category collection collection 

const getAllCategoryController = async (req, res) => {
    try {
        const items = await categorydb.getAllCatygoryItems();
        res.json(items[0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch food items' });
    }
};

module.exports = {getAllCategoryController};