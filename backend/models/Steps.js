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
  zones: [{ name: String }]
});

module.exports = mongoose.model("Steps", stepSchema);
