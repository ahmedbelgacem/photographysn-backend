const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(bodyparser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();

      //  res.send();
});
app.use((req,res,next)=>{
  if(req.method==="OPTIONS"){
    res.send("OK")
    res.end()
    return
  }
  else{
    next();
  }
})
const mongoose = require("mongoose");
const fileUploader = require("./lib/index");

mongoose.connect("mongodb://root:admin123@127.0.0.1:27017/admin", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
app.use(fileUploader());
const routing = require("./routing");
var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server started");
});
app.use(routing);
app.get("/", (req, res) => {
  res.json({
    status: 1,
    message: "Server Running"
  });
});
