import axios from "axios";

import "dotenv/config";

const siteUrl = process.env.siteUrl || "https://coinmarketcap.com";

const getPrice = async () => {
  const data = await axios.get(siteUrl);

  console.log(data);
};

export { getPrice };
