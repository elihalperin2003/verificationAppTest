import bcrypt from "bcrypt";
import { readFile, writeFile } from "../db/readAndWrite.js";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET;

export function createToken(username, email) {
  return jwt.sign({ username, email }, SECRET, { expiresIn: "1h" });
}

export async function signUp({ username, email, password }) {
  const hashPassword = await bcrypt.hash(password, 12);
  const user = { username, email, hashPassword };
  await writeFile(user);
  const token = createToken(username, email);
  return token;
}

export function login({ user }) {
  const { username, email } = user;
  const token = createToken(username, email);
  return { token, data: { username, email } };
}

export async function getUser({ username }) {
  const users = await readFile();
  const user = users.find((user) => user.username === username);
  const { email } = user;
  return { username, email };
}
