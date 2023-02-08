const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = () => {
  mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log('Database connected successfully')).catch((err) => console.log(err));
}

module.exports = db;