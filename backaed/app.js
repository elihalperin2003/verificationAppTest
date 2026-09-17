import express from "express";

const PORT = process.env.PORT;

const app = express();

app.use(json());

app.use((err, _req, res, _next) => {
  if (err) {
    const message = err.message || "System error on the server";
    const status = err.status || 500;
    res.status(status).json({ error: message });
  }
});

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
