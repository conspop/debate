const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playersSchema = new Schema({
  name: String,
})

const gameSchema = new Schema({
  gameId: String,
  players: [playersSchema]
});

module.exports = mongoose.model('Game', gameSchema);

//add date to game schema