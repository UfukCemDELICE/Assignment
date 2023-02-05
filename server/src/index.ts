import express, {Request, Response} from "express";
import mongoose from "mongoose";
import {config} from "dotenv";
import Company from "./models/Company";
config();
const PORT = 5000;
const app = express();
app.use(express.json());

app.post('/company', async (req: Request, res: Response) => {
  const newCompany = new Company({
    CompanyName: req.body.CompanyName,
  });
  const createdCompany = await newCompany.save();
  res.send(createdCompany);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
      console.log(`Listening on port ${PORT}!`);
      app.listen(PORT);
});

