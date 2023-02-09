const Auth = require('../models/Auth.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const register = async (req, res) => {
  try {
    const {username, email, password } = req.body;
    const user = await Auth.findOne({ email });
    if(user) {
      return res.status(500).json({ message: 'User already exists' });
    } 
    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new Auth({username, email, password: passwordHash });
    await newUser.save();
    const userToken = jwt.sign({id: newUser.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'});
    res.status(201).json({
      status: 'OK',
      newUser,
      userToken
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const login = async (req, res) => {
  try{
    const {email, password} = req.body;
    const user = await Auth.findOne({email});
    if(!user){
      return res.status(500).json({message: 'User not found'});
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch){
      return res.status(500).json({message: 'Password is incorrect'});
    }
    const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'});
    res.status(200).json({
      status: 'OK',
      user,
      token
    });
  }catch(error){
    res.status(500).json({message: error.message});
  }
};

module.exports = {register, login};
