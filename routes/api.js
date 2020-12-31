const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/api');

router.post('/newgame', apiCtrl.newGame)
router.post('/joingame', apiCtrl.joinGame)
router.post('/updategamestate', apiCtrl.updateGameState)
router.post('/changescene', apiCtrl.changeScene)
router.post('/newround', apiCtrl.newRound)
router.post('/toggletimer', apiCtrl.toggleTimer)
router.post('/nextstage', apiCtrl.nextStage)

module.exports = router;