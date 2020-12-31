const Game = require('../models/game')
const Topic = require('../models/topic')
const Handicap = require('../models/handicap')

module.exports = {
  newGame,
  joinGame,
  updateGameState,
  changeScene,
  newRound,
  toggleTimer,
  nextStage
};

const testPlayers = [{name:'Seb'}, {name:'Stef'}, {name:'Connor'}]

async function newGame(req, res) {
  // create random gameId and add to db
  let gameId = ''
  while (gameId.length < 5) {
    gameId += (Math.floor(Math.random() * 9) + 1)
  }
  await Game.create({gameId, scene:'gather'})
  res.json(gameId) 
}

async function joinGame(req, res) {
  // add new player to game
  await Game.findOne({gameId: req.body.gameId}, function(err, game) {
    game.players.push({name: req.body.name})
    game.save()
    if (err) {
      res.json(err)
    } else {
      res.json(game)
    }
  })
}

async function updateGameState(req, res) {
  // add new player to game
  await Game.findOne({gameId: req.body.gameId}, function(err, game) {
    if (err) {
      res.json(err)
    } else {
      res.json(game)
    }
  })
}

async function changeScene(req, res) {
  await Game.findOne({gameId: req.body.gameId}, function(err, game) {
    game.scene = req.body.scene
    game.save()
    if (err) {
      res.json(err)
    } else {
      res.json(game)
    }
  })
}

function chooseTwoPlayers(game) {
  let idx1 = (Math.floor(Math.random() * game.players.length))
  let idx2
  while (!idx2 || idx2 === idx1) {
    idx2 = (Math.floor(Math.random() * game.players.length))
  } 
  return ([game.players[idx1].name, game.players[idx2].name])
}

async function chooseTwoHandicaps(game) {
  let handicaps = await Handicap.find({})
  let idx1 = (Math.floor(Math.random() * handicaps.length))
  let idx2
  while (!idx2 || idx2 === idx1) {
    idx2 = (Math.floor(Math.random() * handicaps.length))
  } 
  return ([handicaps[idx1].handicap, handicaps[idx2].handicap])
}

async function chooseTopic(game) {
  let topics = await Topic.find({})
  let idx = (Math.floor(Math.random() * topics.length))
  return topics[idx].topic
}

async function newRound(req, res) {
  let game = await Game.findOne({gameId: req.body.gameId})
  let players = await chooseTwoPlayers(game)
  let handicaps = await chooseTwoHandicaps(game)
  game.rounds.push({
    yesPlayer: players[0],
    noPlayer: players[1],
    yesHandicap: handicaps[0],
    noHandicap: handicaps[1],
    topic: await chooseTopic(game),
    stage: 1,
    runTimer:false
  })
  game.save()
  res.json(game)
}

async function toggleTimer(req, res) {
  await Game.findOne({gameId: req.body.gameId}, function(err, game) {
    const {rounds} = game
    const round = rounds[rounds.length - 1]
    round.runTimer = !round.runTimer
    game.save()
    if (err) {
      res.json(err)
    } else {
      res.json(game)
    }
  })
}

async function nextStage(req, res) {
  await Game.findOne({gameId: req.body.gameId}, function(err, game) {
    const {rounds} = game
    const round = rounds[rounds.length - 1]
    round.runTimer = false
    round.stage += 1
    game.save()
    if (err) {
      res.json(err)
    } else {
      res.json(game)
    }
  })
}

