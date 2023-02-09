const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const db = require('./config/database.js');
const Auth = require('./routes/auth.js');
const Company = require('./routes/company.js');
dotenv.config();

const app = express();



app.use(cors());
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));


app.use('/', Auth);
app.use('/', Company);



const PORT = process.env.PORT || 5000;

db()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});