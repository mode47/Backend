const bcrypt = require('bcrypt');
const UserDb = require('../db/userDb');
const jwt = require('jsonwebtoken');
const { createCart } = require('../db/cartDb'); // Import cartDb module



const register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    try {
        // Check if the user already exists
        const existingUser = await UserDb.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create the user
       const result= await UserDb.createUser(username, email, hashedPassword);
        console.log("user_id",result.insertId);
        const cart=await createCart(result.insertId);

        return res.status(201).json({ message: 'Success' });
    } catch (e) {
        console.error('Error registering user:', e.message);
        return res.status(500).json({ message: e.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        // Find the user by email
        const user = await UserDb.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // verify that the user password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Generate and send a JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
    }catch (e){
        console.error('Error logging in user:', e.message);
        return res.status(500).json({ message: e.message });

    }
};
//log out the user

const logout = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
};

module.exports={register,login,logout}