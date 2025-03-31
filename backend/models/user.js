const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  
  },
  email: {
    type: String,
    required: [true, "The Email is required !!!"],
    unique: [true, "The email already used !!"],
    lowercase: true,
    validate: [validator.isEmail, "You must set a valid email !!!"],
  },
  password: {
    type: String,
    required: [true, "The Password is required !!!"],
    minlength: 8,
  },

  password_updated_at: {
    type: Date,
    default: Date.now(),
  },
  created_At: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;