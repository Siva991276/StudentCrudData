const mongoose = require("mongoose");

const StudentModelData = new mongoose.Schema({
  stdName: {
    type: String,
    required: true,
  },
  stdAge: {
    type: String,
    required: true,
  },
  stdEmail: {
    type: String,
    required: true,
  },
  stdPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("StudentData", StudentModelData);
