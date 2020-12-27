const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/api');

router.post('/newgame', apiCtrl.newGame)
router.post('/joingame', apiCtrl.joinGame)
router.post('/updateplayers', apiCtrl.updatePlayers)

module.exports = router;