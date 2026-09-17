import { readFile } from "../db/readAndWrite.js";
import bcrypt from "bcrypt";

export const paramsCorrectSignUp = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ error: "all params required" });
  next();
};

export const paramsCorrectLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "all params required" });
  next();
};

export const userExsitsLogin = async (req, res, next) => {
  const { username } = req.body;
  const users = await readFile();
  const user = users.find((user) => user.username === username);
  if (!user) return res.status(400).json({ error: "username not exsits" });
  req.user = user;
  next();
};

export const passwordCorrectLogin = async (req, res, next) => {
  const { password } = req.body;
  const { hashPassword } = req.user;
  const isMetch = await bcrypt.compare(password, hashPassword);
  if (!isMetch) return res.status(401).json({ error: "password incorrect" });
  next();
};
