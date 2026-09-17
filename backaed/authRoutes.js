import { Router } from "express";
import {
  paramsCorrectSignUp,
  paramsCorrectLogin,
  userExsitsLogin,
  passwordCorrectLogin,
} from "./middlewares/middleware.js";
import { login, signUp } from "./service/authService.js";

export const router = Router();

router.post("/sign-up", paramsCorrectSignUp, async (req, res, next) => {
  try {
    const token = await signUp(req.body);
    res.status(201).json({ token, message: "sign up successfully" });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/login",
  paramsCorrectLogin,
  userExsitsLogin,
  passwordCorrectLogin,
  async (req, res, next) => {
    try {
      const { token, data } = login(req);
      res.status(201).json({ token, data, message: "login successfully" });
    } catch (error) {
      next(error);
    }
  },
);

router.post("/logout", (req, res, next) => {
  try {
    const result = fn();
    res.status(201).json({ message: result });
  } catch (error) {
    next(error);
  }
});
