import mongoose from "mongoose";

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
    unique: true,
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
export default mongoose.model("Company", CompanySchema);