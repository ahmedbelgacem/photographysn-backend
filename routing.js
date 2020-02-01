var express = require("express");
//var cors = require('cors');
var router = express.Router();
var manageProfils = require("./modules/manageProfils.module");
var managePhotos = require("./modules/managePhotos.module");
var authentification = require("./modules/authentification.module");
var uploader = require("./modules/uploader.module");
//router.use(cors());
router.use("/photo", managePhotos);
router.use("/photo", uploader)
router.use('/profil',manageProfils);
router.use('/auth',authentification);

module.exports = router;
