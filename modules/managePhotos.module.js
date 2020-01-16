const express = require("express");
const router = express.Router();
const fs = require("fs");
var Photo = require("../models/photoModel").model;
router.get("/all", (req, res) => {
  Photo.find({}, (err, photos) => {
    if (err) {
      res.send(err);
    }

    res.json(photos);
  });
});
router.post("/send", (req, res) => {
  const newphoto = new Photo(req.body);

  newphoto.save((err, photo) => {
    if (err) {
      res.send(err);
    }

    res.json(photo);
  });
});
router.get("/select/:PhotoId", (req, res) => {
  Photo.findById(req.params.PhotoId, (err, photo) => {
    if (err) {
      res.send(err);
    }

    res.json(photo);
  });
});
router.put("/update/:PhotoId", (req, res) => {
  Photo.findOneAndUpdate(
    {
      _id: req.params.PhotoId
    },
    req.body,
    (err, photo) => {
      if (err) {
        res.send(err);
      }

      res.json(photo);
    }
  );
});
router.delete("/delete/:PhotoId", (req, res) => {
  Photo.findById(req.params.PhotoId).then(photo => {
    fs.unlinkSync(photo.fsPath);
    Photo.remove(
      {
        _id: req.params.PhotoId
      },
      err => {
        if (err) {
          res.send(err);
        }

        res.json({
          message: `photo ${req.params.PhotoId} successfully deleted`
        });
      }
    ); 
  });
});
module.exports = router;
