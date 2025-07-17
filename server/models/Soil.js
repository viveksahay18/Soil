// Soil model
const mongoose = require('mongoose');

const soilSchema = new mongoose.Schema({
  type: String,
  location: String,
  nutrients: String
});

module.exports = mongoose.model('Soil', soilSchema);
