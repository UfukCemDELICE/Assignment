const auth = require('../models/auth.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await auth.findOne({ email });
    if (!user) {
      const newUser = { email, password };
      const passwordHash = await bcrypt.hash(password, 10);
      const newUserPassword = { email, password: passwordHash };
      await auth.insertOne({ newUser });
      const userToken = jwt.sign({ id: newUserPassword.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
      res.status(201).json({ 
        status: "OK",
        newUser,
        userToken
      });
    } else {
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return res.status(500).json({ error: 'Invalid password' });
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
      res.status(201).json({
        status: "OK",
        user,
        token
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

module.exports = register;
