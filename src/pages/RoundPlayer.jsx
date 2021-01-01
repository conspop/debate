import React, { useState, useEffect} from 'react'
import axios from 'axios'

const startTimer = async (event) => {
  await axios.post('/api/toggletimer', {
    gameId: event.target.id
  })
  .catch (err => console.log(err.message))
}

function whatToRender(rounds, round, amArguing, startTimerButton, gameId) {
  if (rounds.length === 0) {
    return 'Loading'
  } else {
    if (amArguing === '') {
      return 'You are not arguing this round'
    } else {
      let arguing
      let handicap
      if (amArguing === 'yes') {
        arguing = 'Yes'
        handicap = round.yesHandicap
      } else {
        arguing = 'No'
        handicap = round.noHandicap
      }
      if (startTimerButton) {
        return (
          <>
            <h1>Topic: {round.topic}</h1>
            <h3>Arguing: {arguing}</h3>
            <h3>Handicap: {handicap}</h3>
            <button id={gameId} onClick={startTimer}>Start Timer</button>
          </>
        )
      } else {
        return (
          <>
            <h1>Topic: {round.topic}</h1>
            <h3>Arguing: {arguing}</h3>
            <h3>Handicap: {handicap}</h3>
          </>
        )
      }
    }
  }
}

function RoundPlayer(props) {
  const {rounds} = props
  const round = rounds[rounds.length - 1]
  
  const [amArguing, setAmArguing] = useState('')
  const [startTimerButton, setStartTimerButton] = useState(false)

  useEffect(() => {
    if (props.name === round.yesPlayer) {
      setAmArguing('yes')
    } else if (props.name === round.noPlayer) {
      setAmArguing('no')
    }
    if (amArguing !== '' && props.stages[round.stage].turn === amArguing) {
      setStartTimerButton(true)
    } else {
      setStartTimerButton(false)
    }
  }, [props.name, props.stages, round.yesPlayer, round.noPlayer, round.stage, amArguing])
  
  return (
    <>
      <h1>{props.name}</h1>
      {whatToRender(rounds, round, amArguing, startTimerButton, props.gameId)}
    </>  
  )
}

export default RoundPlayer