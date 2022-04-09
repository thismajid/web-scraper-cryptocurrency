import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on localhost:${port} ...`);
});
