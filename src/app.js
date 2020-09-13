const express = require("express");

const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/page2", (req, res) => {
  res.render("page2");
});
app.get("/page3", (req, res) => {
  res.render("page3");
});
app.get("/page4", (req, res) => {
  res.render("page4");
});
app.get("/page5", (req, res) => {
  res.render("page5");
});

app.listen(3333, () => {
  console.log("3333 PORt WEB SERVER START");
});
