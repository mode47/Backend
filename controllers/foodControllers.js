

const express = require('express');
const app = express();
app.use(express.json());

const fooddb = require('../db/foodDb');

const getAllFoodController = async (req, res) => {
    try {
        const foodItems = await fooddb.getAllFoodItems();
        res.json(foodItems[0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch food items' });
    }
};


// const getAllFoodController=(req, res, next)=> {
//     try{
//         const foodItems= fooddb.getAllFoodItems();
//         console.log("foodItems from contraller:",foodItems);
//         res.json(foodItems);
//         } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch food items' });
//         }

// }   



 

module.exports={getAllFoodController};

