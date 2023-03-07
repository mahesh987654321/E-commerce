import slugify from "slugify";
import catagoryModels from "../models/catagoryModels.js";

export const categoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCategory = await catagoryModels.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category Already Exists",
      });
    }
    const newCategory = await catagoryModels({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "New category created",
      newCategory,
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};

export const updateController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateCategory = await catagoryModels.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      updateCategory,
    });
    console.log(updateCategory);
  } catch (error) {
    console.log(err);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};
export const categoryDeleted = async (req, res) => {
  try {
    const { id } = req.params;
    await catagoryModels.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};
