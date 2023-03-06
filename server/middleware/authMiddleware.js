import jwt from "jsonwebtoken";
import userModels from "../models/userModels.js";
export const requireSignIn = (req, res, next) => {
  try {
    const decode = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// Admin access token

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModels.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "You are not authorized to perform this action",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error while accessing the admin middleware",
    });
  }
};
