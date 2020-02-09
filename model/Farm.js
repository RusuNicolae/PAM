const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  strada: {
    type: String,
    trim: true
  },
  id: {
    type: String
  }
});

/**
 * @typedef Iconset
 */
module.exports = mongoose.model("Farm", farmSchema);