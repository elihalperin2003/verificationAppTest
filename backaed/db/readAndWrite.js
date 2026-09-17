import fs from "fs/promises";

export async function readFile() {
  const data = await fs.readFile("./users.json", "utf-8");
  if (!data) return;
  return JSON.parse(data);
}

export async function writeFile(data) {
  let users = await readFile();
  if (!users) {
    users = [];
  }
  users.push(data);
  await fs.writeFile("users.json", JSON.stringify(users));
}
