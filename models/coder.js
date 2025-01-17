const mongoose = require("mongoose");

const coderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Validation: name is required
  },
  tech: {
    type: String,
    required: true, // Validation: tech is required
  },
  sub: {
    type: Boolean,
    required: true, // Validation: sub is required
  },
});

module.exports = mongoose.model("Coder", coderSchema);
