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
    type: String,
    required: true,
  },
  Company: [{
    type: Schema.Types.ObjectId,
    ref: "Company",
  }],
});
//mongoose.set('strictQuery', true);
module.exports = mongoose.model("product", ProductSchema);