require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(express.json());
// Middleware

app.use(cors());
// Importing routes (make sure this line comes after defining app)
const userRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/categoryRoutes');
const foodRoutes = require('./routes/foodRoutes');
const cartItemRoutes = require('./routes/cartItemRoutes');
// Use the routes
app.use('/food', foodRoutes);
app.use('/category', categoryRoutes);
app.use('/cart',cartItemRoutes)
app.use('/auth', userRoutes)
// Default rout
app.get('/', (req, res) => {
    res.send('Welcome to My Node.js Project!');
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});

