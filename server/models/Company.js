const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  CompanyName: {
    type: String,
    required: true,
    unique: true,
  },
  IncorporationCountry: {
    type: String,
    required: true,
  },
  CompanyLegalNumber: {
    type: String,
    required: true,
    unique: true,
  },
  website: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("company", CompanySchema);