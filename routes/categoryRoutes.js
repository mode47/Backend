const express = require('express');
const router = express.Router();
const CategoryContraller=require('../controllers/categoryControllers');

// Get all categories

router.get('/', CategoryContraller.getAllCategoryController);

module.exports = router;

// Example route: GET /api/users

