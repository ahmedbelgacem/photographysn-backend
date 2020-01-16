 const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autopopulate = require('mongoose-autopopulate');
const PhotoScheme = new Schema({
  title: {
    type: String
  },
  alt: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,ref:"profil",
    autopopulate:true
  },
  filename: {
    type: String
  } /*
  profil: {
    type:Schema.Types.ObjectId,ref:"profil",autopopulate:true
  },*/,
  httpPath: {
    type: String
  },
  fsPath: {
    type: String
  },
  date: {
    type: Date,
    default: new Date()
  }
});
PhotoScheme.plugin(autopopulate);
module.exports = {
  model: mongoose.model("Photo", PhotoScheme),
  schema: PhotoScheme
};
