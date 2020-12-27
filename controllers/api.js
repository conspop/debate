const Game = require('../models/game')

module.exports = {
  newGame,
  joinGame,
  updatePlayers
};

async function newGame(req, res) {
  // create random gameId and add to db
  let gameId = ''
  while (gameId.length < 5) {
    gameId += (Math.floor(Math.random() * 9) + 1)
  }
  await Game.create({gameId})
  res.json(gameId)
}

async function joinGame(req, res) {
  // add new player to game
  await Game.findOne({gameId: req.body.gameId}, function(err, game) {
    console.log(game)
    game.players.push({name: req.body.name})
    game.save()
    if (err) {
      res.json(err)
    } else {
      res.json(game)
    }
  })
}

async function updatePlayers(req, res) {
  // add new player to game
  await Game.findOne({gameId: req.body.gameId}, function(err, game) {
    console.log(game)
    if (err) {
      res.json(err)
    } else {
      res.json(game)
    }
  })
}