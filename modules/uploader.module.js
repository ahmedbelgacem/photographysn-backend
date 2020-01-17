const express = require("express");
//var cors = require('cors')
var router = express.Router();
//router.use(cors());
router.post("/upload", (req, res) => {
  var file = req.files.img;
  file.name=file.name.split(' ').join('-');
  var path = new Date().getTime().toString() + file.name;
  var fsPath = "/var/www/html/uploads-photographysn/" + path;
  var httpPath = "http://localhost/uploads-photographysn/" + path;
  file.mv(fsPath);
  res.json({ fsPath: fsPath, httpPath: httpPath });
});
module.exports = router;
