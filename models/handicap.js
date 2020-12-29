const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const handicapSchema = new Schema({
  handicap: String
});

module.exports = mongoose.model('Handicap', handicapSchema);

