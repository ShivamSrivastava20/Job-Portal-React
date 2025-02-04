import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    console.log("REQ ++++++ " ,req.body)
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "You can't register same company",
        success: false,
      });
    }
    let company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log("Error registerCompany ", error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const user_id = req.id;
    const companies = await Company.find(user_id);
    if (!companies) {
      return res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Companies found successfully",
      companies,
      success: true,
    });
  } catch (error) {
    console.log("Error getCompany", error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company found successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log("Error getCompanyById", error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company updated successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error updateCompany", error);
  }
};
