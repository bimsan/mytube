import express from "express";

const app = express();

const PORT = 4000;

const handleHome = (req, res) => {
  return res.send("<strong>Welcome Home</strong>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`👁‍  Server listening on port http://localhost:${PORT} 📡`);

app.listen(PORT, handleListening);
