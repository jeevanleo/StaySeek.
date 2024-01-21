const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.listen(4000, () => {
  console.log("Frontend Running at 4000");
});
