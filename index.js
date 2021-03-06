const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
app.set("view engin", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/weather", (req, res) => {
  const cityName = req.body.name;
  const weather = async () => {
    const Post = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=30c06c817dfaf455478e39636b9e5619&units=metric`
    );
    const data = await Post.json();
    res.render("weatherData.ejs", { data });
    res.send("hoo you got wrong way");
  };

  weather();
});
app.get("*", (req, res) => {
  res.render("err.ejs");
});
// express error handling

app.use((err, req, res, next) => {
  res.send("your input is empty");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("SERVER IS ON");
});
