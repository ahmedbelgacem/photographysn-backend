const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var User = require("../models/userModel").model;
var Profil = require("../models/profilModel").model;
router.post("/signin", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({email:email,password:password},(err,data)=>{
    if(err||(!data)){
      res.status(403).send({message:"wrong credentials",status:0})
    }
    else {
      Profil.findOne({_id:data.profil}).then(r=>{
        var token=jwt.sign({userId:data['_id']},"admin123")
        res.json({
          profil:r,
          token:token,
          status:1
        })
      })

    }
  })
});
router.post("/signup", (req, res) => {
  var profil = new Profil(req.body.profil);
  profil.save((err, profil) => {
    if (err) {
      res.send(err);
    } else {
      var user = new User(req.body.user);
      user.profil = profil._id;
      user.save((err, user) => {
        if (err) {
          res.send(err);
        } else {
          res.json({
            status: 1,
            message: "usercreated"
          });
        }
      });
    }
  });
});
module.exports = router;
