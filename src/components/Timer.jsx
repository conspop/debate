import React, {useState, useEffect} from 'react'
import axios from 'axios'

async function moveToNextStage(gameId) {
  axios.post('/api/nextstage', {
    gameId
  })
  .catch(err => err.message)
}

export default function Timer(props) {

  let timerInterval
  
  const [timeLeft, setTimeLeft] = useState(props.stages[props.round.stage].timer / 1000)

  useEffect(() => {
    if (timeLeft > 0) {
      timerInterval = setTimeout(function () {
        setTimeLeft(timeLeft - 1)
      },1000)
    } else {
      moveToNextStage(props.gameId)
      props.killTimer()
    }
    return function cleanup() {
      clearInterval(timerInterval)
    }
  })

  return (
    <h1>{timeLeft}</h1>
  )
}

