const express = require('express');
const router = express.Router();



const foodDbRoute = require('../controllers/foodControllers'); // Import the food model
// Example route

router.get('/', foodDbRoute.getAllFoodController);


// router.get('/users', async (req, res) => {
//     try {
//         const products =  foodDb.getAllFoodItems()
//         res.json(products.rows);
//       } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//       }
// });

module.exports = router;
