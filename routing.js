var express = require("express");
var router = express.Router();

var managePhotos = require("./modules/managePhotos.module");
var uploader = require("./modules/uploader.module");
//var manageProfils = require('./modules/gestionConversation.module');

router.use("/photo", managePhotos);
router.use("/photo", uploader)
//router.use('/profil',manageProfils);

module.exports = router;
