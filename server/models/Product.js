const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  ProductName: {
    type: String,
    required: true,
  },
  ProductCategory: {
    type: String,
    required: true,
  },
  ProductAmount: {
    type: Number,
    required: true,
  },
  AmountUnit: {
    type: Number,
    required: true,
  },
  Company: [{
    type: Schema.Types.String,
    ref: "Company[0]",
  }],
});

module.exports = mongoose.model("product", ProductSchema);