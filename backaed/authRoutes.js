import { Router } from "express";
import { paramsCorrect } from "./middlewares/signUpMiddleware.js";
import { signUp } from "./service/authService.js";

export const router = Router();

router.post("/sign-up", paramsCorrect, async (req, res, error) => {
  try {
    const token = await signUp(req.body);
    res.status(201).json({ token, message: "sign up successfully" });
  } catch (error) {
    next(error);
  }
});

router.post("/login", (req, res, error) => {
  try {
    const result = fn();
    res.status(201).json({ token: result });
  } catch (error) {
    next(error);
  }
});

router.post("/logout", (req, res, error) => {
  try {
    const result = fn();
    res.status(201).json({ message: result });
  } catch (error) {
    next(error);
  }
});
