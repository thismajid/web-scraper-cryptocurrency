import axios from "axios";
import * as cheerio from "cheerio";

import "dotenv/config";

const siteUrl = process.env.siteUrl || "https://coinmarketcap.com";

const getPriceFeed = async () => {
  try {
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);

    const elemSelector =
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr";

    const keys = [
      "Rank",
      "Name",
      "Price",
      "24h %",
      "7d %",
      "Market Cap",
      "Volume (24h)",
      "Circulating Supply",
    ];

    const coinArr = [];

    $(elemSelector).each((parentIdx, parentElem) => {
      let keyIdx = 0;
      const coinObj = {};
      if (parentIdx <= 9) {
        $(parentElem)
          .children()
          .each((childIdx, childElem) => {
            let tdValue = $(childElem).text();

            if (keyIdx === 1 || keyIdx === 6) {
              tdValue = $("p:first-child", $(childElem).html()).text();
            }

            if (tdValue) {
              coinObj[keys[keyIdx]] = tdValue;

              keyIdx++;
            }
          });
        coinArr.push(coinObj);
      }
    });

    return coinArr;
  } catch (err) {
    console.log(err);
  }
};

export { getPriceFeed };
