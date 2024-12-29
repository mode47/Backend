
const express = require('express');
const router = express.Router();
const UserRouter = require('../controllers/UserControllers');
router.post('/register', UserRouter.register);
//rout login routes
router.post('/login', UserRouter.login);
router.get('/logout', UserRouter.logout);
module.exports=router;

