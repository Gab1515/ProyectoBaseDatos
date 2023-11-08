const mongoose = require("mongoose");

const ensereSchemma = new mongoose.Schema({
  name: String,
});

const Ensere = mongoose.model("Enseres", ensereSchemma);

module.exports = Ensere;