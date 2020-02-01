const mongoose = require("mongoose");
var autopopulate = require('mongoose-autopopulate');
const Schema = mongoose.Schema;
const UserScheme = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  profil: {
    type: Schema.Types.ObjectId,ref:"profil",autopopulate:true
  }
});
module.exports = {
  model: mongoose.model("User", UserScheme),
  schema: UserScheme
};
