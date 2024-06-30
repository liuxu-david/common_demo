const express = require("express");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// app.use(cors())

app.get("/", (req, res) => {
  console.log("请求来了");
  res.status(204).send();
});

app.get("/expires", (req, res) => {
  console.log("请求来了");
  const expires = new Date(Date.now() + 1000 * 60 * 60).toUTCString();
  res.setHeader("Expires", expires);
  setTimeout(() => res.send("expires请求"), 3000);
});

app.get("/cacheControl", (req, res) => {
  console.log("请求来了");
  res.setHeader("Cache-Control", "max-age=60");
  setTimeout(() => res.send("cacheControl请求"), 3000);
});

app.get("/lastModified", (req, res) => {
  setTimeout(() => res.send("lastModified请求"), 3000);
});

app.get("/etag", (req, res) => {
  const etag = "liuxu";
  if (req.headers["if-none-match"] === etag) {
    console.log("命中");
    res.status(304).end();
  } else {
    res.setHeader("ETag", etag);
    res.send("lastModified新请求");
  }
});

app.listen(9000, () => {
  console.log("✈️✈️ http://localhost:9000 ✈️✈️");
});
