import express from "express";

const app = express();

const PORT = 4000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("<strong>Welcome Home</strong>");
};

app.use(logger);

app.get("/", handleHome);

// ---------------------------------------------------------

const handleListening = () =>
  console.log(`👁‍  Server listening on port http://localhost:${PORT} 📡`);

app.listen(PORT, handleListening);
