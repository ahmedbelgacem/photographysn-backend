const express = require("express");
//var cors = require('cors')
var router = express.Router();
var Profil = require("../models/profilModel").model;
//router.use(cors());
router.post("/addProfil", (req, res) => {
  const newprofil = new Profil(req.body);

  newprofil.save((err, profil) => {
    if (err) {
      res.send(err);
    }

    res.json(profil);
  });
});
router.get("/all", (req, res) => {
  /*res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')*/
  Profil.find({}, (err, profils) => {
    if (err) {
      res.send(err);
    }

    res.json(profils);
  });
});
router.get("/select/:ProfilName", (req, res) => {
  Profil.find({name:req.params.ProfilName}, (err, profil) => {
    if (err) {
      res.send(err);
    }

    res.json(profil);
  });
});
router.delete("/delete/:ProfilId", (req, res) => {
    Profil.remove(
      {
        _id: req.params.ProfilId
      },
      err => {
        if (err) {
          res.send(err);
        }

        res.json({
          message: `Profil ${req.params.ProfilId} successfully deleted`
        });
      }
    );
});
module.exports = router;
