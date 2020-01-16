const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors")
const app = express();
app.use(bodyparser.json());
const mongoose = require("mongoose");
const fileUploader = require("./lib/index");
mongoose.connect("mongodb://root:admin123@127.0.0.1:27017/admin", {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(fileUploader());
app.use(cors());
const routing = require("./routing");
var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server started");
});
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Content-type", "application/json");
  next();
});
app.use(routing);
app.get("/", (req, res) => {
  res.json({
    status: 1,
    message: "Server Running"
  });
});
