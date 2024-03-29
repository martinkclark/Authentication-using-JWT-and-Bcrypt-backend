const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register a new user

const register = async (req, res,next) => {
    const  { username, email, password } = req.body; // Destructuring(i.e extracting) the username, email and password from the request body
    try{
        const user = new User({ username, email, password });// Create a new user with the username, email and password
         await user.save();// Save the user to the database using the save method and goint through middleware
         return res.status(201).json({ message: 'User created successfully' });// If the user is created successfully, return a 201 status code and a message        
    }catch(error){
         return next(error);// If an error occurs, pass it to the error handler
    }
};

// Login a user

const login = async (req, res,next) => {
    const {username, password} = req.body;// Destructuring(i.e extracting) the username and password from the request body
    try {
        const user = await User.findOne({ username });// Find a user with the username
        // res.send({user : user.username, password : user.password , email : user.email});
        if (!user) return res.status(404).json({ message: 'User not found here' });// If the user is not found, return a 404 status code and a message
        const passwordMatch = await user.comparePassword(password);// Compare the password with the hashed password
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
          }
      
          const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
            expiresIn: '1 hour'
          });
          res.json({ message : "Successfully Logined" ,token });
        }catch (error) {
          console.error('An error occurred in auth.js:', error);
          next(error);
        }
      };

module.exports = { register, login };