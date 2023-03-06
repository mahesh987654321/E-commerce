import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authControllers.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

const route = express.Router();

route.post("/register", registerController);
route.post("/login", loginController);
route.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
export default route;
