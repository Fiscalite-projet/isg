const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema({
  formes: [
    {
      name: String,
      subTypes: [
        {
          name: String,
          subTypes: [{ name: String }]
        }
      ]
    }
  ],
  secteurs: [{ name: String }],
  zones: [{ governorate: String , delegations :[{name: String, isEonored: Boolean }]}]
});

module.exports = mongoose.model("Steps", stepSchema);
