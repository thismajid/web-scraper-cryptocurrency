import express from "express";
import moment from "moment";

import { getPriceFeed } from "../utils/index.js";

const router = express.Router();

router.get("/price", async (req, res) => {
  try {
    const result = await getPriceFeed();

    return res.json({
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      result,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message.toString() });
  }
});

export default router;
