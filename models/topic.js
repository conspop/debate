const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  topic: String,
  controversial: Boolean,
});

module.exports = mongoose.model('Topic', topicSchema);

