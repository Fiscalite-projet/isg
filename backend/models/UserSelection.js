const mongoose = require("mongoose");

const userSelectionSchema = new mongoose.Schema({
  forme: String,
  subType: String,
  subSubType: String,
  secteur: String,
  zone: String,
  isExonorated: Boolean,
  delegation: String,

}, { timestamps: true });

module.exports = mongoose.model("UserSelection", userSelectionSchema);
