const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfilScheme = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  httpPath: {
    type: String
  },
  fsPath: {
    type: String
  }
});
module.exports = {
  model: mongoose.model("Profil", ProfilScheme),
  schema: ProfilScheme
};
