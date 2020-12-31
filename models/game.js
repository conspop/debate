const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playersSchema = new Schema({
  name: String,
})

const votesSchema = new Schema({
  name: String,
  vote: Number
})

const roundSceneSchema = new Schema({
  timer: Boolean,
  stage: String,
  turn: String
})

const roundsSchema = new Schema({
  yesPlayer: String,
  noPlayer: String,
  yesHandicap: String,
  noHandicap: String,
  topic: String,
  stage: Number,
  runTimer: Boolean,
  winnerVotes: [votesSchema],
  handicapVotes: [votesSchema]
})

const gameSchema = new Schema({
  gameId: String,
  scene: String,
  players: [playersSchema],
  rounds: [roundsSchema]
});

module.exports = mongoose.model('Game', gameSchema);

//add date to game schema