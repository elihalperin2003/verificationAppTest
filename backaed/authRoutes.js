import { Router } from "express";

const router = Router();

router.post("/sign-up", (req, res, error) => {
  try {
    const result = fn();
    res.status(201).json({ token: result });
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
