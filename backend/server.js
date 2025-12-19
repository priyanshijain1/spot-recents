require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/spotify/recently-played", (req, res) => {
  res.json({
    title: "Mock Song",
    artist: "Mock Artist",
    albumArt: ""
  });
});

app.listen(3001, () => {
  console.log("Backend running on http://127.0.0.1:3001");
});
