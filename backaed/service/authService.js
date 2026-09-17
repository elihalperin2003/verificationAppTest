import bcrypt from "bcrypt";
import { writeFile } from "../db/readAndWrite.js";
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
