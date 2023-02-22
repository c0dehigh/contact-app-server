const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  job: {
    type: String,
    required: true,
  },

  group: {
    type: Number,
    required: true,
  },
});

const gpSchema = new mongoose.Schema({
  id: {
    type: Number,
  },

  name: {
    type: String,
  },
});

const userSchema = mongoose.model("Data", dataSchema);
const groupsSchema = mongoose.model("Groups", gpSchema);

module.exports = { User: userSchema, Groups: groupsSchema };
