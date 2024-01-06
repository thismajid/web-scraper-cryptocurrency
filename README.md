# Web Scraper Cryptocurrency Price

This repository contains a web scraping application built with Node.js, Express.js, and Cheerio. The application allows you to scrape and retrieve cryptocurrency prices from a specific website.

## Features

- When you access the application in your browser, it sends a request to the server.
- The server receives the request and initiates a web scraping process.
- The server uses Cheerio to parse the HTML of the target website and extract the relevant cryptocurrency price data.
- The extracted data is then sent back to the client as a response.

## Tech Stack

- **Express.js**: Express.js for creating a scalable server-side application.
- **Cheerio**: Server-side scraping of HTML documents.

### Installation

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/thismajid/web-scraper-cryptocurrency.git
cd web-scraper-cryptocurrency
npm install
npm start
```
