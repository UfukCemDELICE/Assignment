const Company = require('../models/company');


const createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json({
      newCompany
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCompany = async (req, res) => {
  try {
    const getCompany = await Company.find(req.body);
    res.status(201).json({
      getCompany
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const updateCompany = await Company.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      updateCompany
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    await Company.findByIdAndRemove(id);
    res.status(201).json({
      message: 'Company deleted'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createCompany, getCompany, updateCompany, deleteCompany };