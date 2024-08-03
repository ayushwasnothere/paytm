const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const userSchemaHard = mongoose.Schema({
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

const accountSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
const Account = mongoose.model("account", accountSchema);

module.exports = {
  User,
  Account,
};
