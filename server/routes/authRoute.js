import express from "express";
import {
  forgotPassword,
  loginController,
  registerController,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const route = express.Router();

route.post("/register", registerController);
route.post("/login", loginController);
route.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
route.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
// Forgot password
route.post("/forgot-password", forgotPassword);
export default route;
