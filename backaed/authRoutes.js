import { Router } from "express";
import {
  paramsCorrectSignUp,
  paramsCorrectLogin,
  userExsitsLogin,
  passwordCorrectLogin,
  verifyToken,
} from "./middlewares/middleware.js";
import { getUser, login, signUp } from "./service/authService.js";

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
      res.cookie("token", token, { httpOnly: true });
      res.status(201).json({ token, data, message: "login successfully" });
    } catch (error) {
      next(error);
    }
  },
);

router.get("/get-user/:username", verifyToken, async (req, res, next) => {
  try {
    const data = await getUser(req.params);
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
});
