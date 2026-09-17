import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import { router } from "./authRoutes.js";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.use((err, _req, res, _next) => {
  if (err) {
    const message = err.message || "System error on the server";
    const status = err.status || 500;
    res.status(status).json({ error: message });
  }
});

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
