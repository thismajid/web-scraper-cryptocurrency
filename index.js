import express from "express";
import "dotenv/config";

import routes from "./routers/index.js";

const app = express();

app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on localhost:${port} ...`);
});
