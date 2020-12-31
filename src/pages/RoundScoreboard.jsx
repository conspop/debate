import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Timer from '../components/Timer'

function RoundScoreboard(props) {
  const {rounds, gameId} = props
  const round = rounds[rounds.length - 1]

  const [showTimer, setShowTimer] = useState(true)

  useEffect(async () => {
    if (rounds.length === 0) {
      await axios.post('/api/newround', {
        gameId
      })
      .catch(err => console.log(err.message))
    } 
  })

  useEffect(() => {
    if (rounds.length > 0) {
      if (round.runTimer) {
        setShowTimer(true)
      }
    }
  })

  function killTimer() {
    setShowTimer(false)
  }

  return (
    (rounds.length === 0) ?
    <div>Loading</div> :
    <div>
      <h1>{props.gameId}</h1>
      <h1>Topic: {round.topic}</h1>
      <h3>Arguing Yes: {round.yesPlayer}</h3>
      <h3>Arguing No: {round.noPlayer}</h3>
      {showTimer && round.runTimer ?
        <Timer round={round} stages={props.stages} runTimer={round.runTimer} gameId={props.gameId} killTimer={killTimer} />
        : ''
      }
    </div>
  )
}

export default RoundScoreboard