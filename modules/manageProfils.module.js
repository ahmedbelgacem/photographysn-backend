const express = require("express");
var router = express.Router();
var Profil = require("../models/profilModel").model;

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
  Profil.find({}, (err, profils) => {
    if (err) {
      res.send(err);
    }

    res.json(profils);
  });
});
router.get("/select/:ProfilId", (req, res) => {
  Profil.findById(req.params.ProfilId, (err, profil) => {
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
