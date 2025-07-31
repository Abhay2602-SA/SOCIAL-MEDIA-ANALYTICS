import express from "express";
import { getStats, createStat } from "../controllers/statController.js";

const router = express.Router();

router.route("/")
  .get(getStats)
  .post(createStat);

export default router;
