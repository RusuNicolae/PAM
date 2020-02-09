const mongoose = require("mongoose");

const medSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  farmacie: {
    type: String,
    trim: true
  }
});

/**
 * @typedef Iconset
 */
module.exports = mongoose.model("Med", medSchema);