import express from "express";

const handleHome = (req, res) => res.send("Home");

const globalRouter = express.Router();

globalRouter.get("/", handleHome);

export default globalRouter;
