import express from "express";
import cheerio from "cheerio";
import "dotenv/config";

import { getPrice } from "./getPrice.js";

const app = express();

getPrice();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on localhost:${port} ...`);
});
