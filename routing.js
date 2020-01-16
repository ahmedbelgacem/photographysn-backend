var express = require("express");
var router = express.Router();
var manageProfils = require("./modules/manageProfils.module");
var managePhotos = require("./modules/managePhotos.module");
var uploader = require("./modules/uploader.module");

router.use("/photo", managePhotos);
router.use("/photo", uploader)
router.use('/profil',manageProfils);

module.exports = router;
