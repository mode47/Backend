const express = require('express');
const router = express.Router();

// const foodDb = require('../db/foodDb');

const foodDbRoute = require('../controllers/foodControllers'); // Import the food model
 
// Get all products

router.get('/', foodDbRoute.getAllFoodController);

module.exports = router;