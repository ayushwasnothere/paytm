const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const UserSchemaHard = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 4,
    maxLength: 15,
    match: /^[a-zA-Z0-9]+$/,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 15,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 15,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = {
  User,
};
