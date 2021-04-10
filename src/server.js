import express from "express";

const app = express();

const PORT = 4000;

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("<strong>Welcome Home</strong>");
};

app.get("/", gossipMiddleware, handleHome);

const handleListening = () =>
  console.log(`👁‍  Server listening on port http://localhost:${PORT} 📡`);

app.listen(PORT, handleListening);
