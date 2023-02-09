const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AuthSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
});
//mongoose.set('strictQuery', true);
module.exports = mongoose.model('auth', AuthSchema);