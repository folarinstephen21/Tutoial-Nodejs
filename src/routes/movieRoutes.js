import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Movies loading");
});

export default router;