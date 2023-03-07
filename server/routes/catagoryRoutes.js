import express from "express";
import {
  categoryController,
  categoryDeleted,
  getCategory,
  updateController,
} from "../controllers/createCategoryController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/create-category", requireSignIn, isAdmin, categoryController);
router.put("/update-category/:id", requireSignIn, isAdmin, updateController);
router.delete("/delete-category/:id", requireSignIn, isAdmin, categoryDeleted);
router.get("/category", requireSignIn, isAdmin, getCategory);
router.get("/category/:id", requireSignIn, isAdmin, getCategory);

export default router;
