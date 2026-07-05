import express from "express";
import { register, login, logout } from "../controller/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  addToWatchlist,
  updateWatchlistItem,
  removeFromWatchlist,
} from "../controller/watchlistController.js";

const router = express.Router();

router.use(authMiddleware); // Apply authMiddleware to all routes below

// Watchlist routes
router.post("/", addToWatchlist);
router.put("/:id", updateWatchlistItem);
router.delete("/:id", removeFromWatchlist);


export default router;
