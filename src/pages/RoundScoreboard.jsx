import React, { useEffect } from 'react'
import axios from 'axios'
import Timer from '../components/Timer'

async function startNewRound(gameId) {
  await axios.post('/api/newround', {
    gameId
  })
  .catch(err => console.log(err.message))
}

function RoundScoreboard(props) {
  const {rounds, gameId} = props
  const round = rounds[rounds.length - 1]

  useEffect(() => {
    if (rounds.length === 0) {
      startNewRound(gameId)
    } 
  })

  return (
    (rounds.length === 0) ?
    <div>Loading</div> :
    <div>
      <h1>{props.gameId}</h1>
      <h1>Topic: {round.topic}</h1>
      <h3>Arguing Yes: {round.yesPlayer}</h3>
      <h3>Arguing No: {round.noPlayer}</h3>
      <Timer seconds={props.stages[round.stage].timer} runTimer={round.runTimer} gameId={props.gameId}/>
    </div>
  )
}

export default RoundScoreboard