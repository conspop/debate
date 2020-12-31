import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Timer from '../components/Timer'

function RoundScoreboard(props) {
  const {rounds, gameId} = props
  const round = rounds[rounds.length - 1]

  useEffect(async () => {
    if (rounds.length === 0) {
      await axios.post('/api/newround', {
        gameId
      })
      .catch(err => console.log(err.message))
    } 
  })

  return (
    (rounds.length === 0) ?
    <div>Loading</div> :
    <div>
      <h1>Topic: {round.topic}</h1>
      <h3>Arguing Yes: {round.yesPlayer}</h3>
      <h3>Arguing No: {round.noPlayer}</h3>
      <Timer round={round} stages={props.stages} runTimer={round.runTimer} />
    </div>
  )
}

export default RoundScoreboard