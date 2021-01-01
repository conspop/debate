import React, {useState, useEffect} from 'react'
import axios from 'axios'

async function moveToNextStage(gameId) {
  axios.post('/api/nextstage', {
    gameId
  })
  .catch(err => err.message)
}

export default function Timer(props) { 
  const [seconds, setSeconds] = useState('')
  const [isActive, setIsActive] = useState(false)

  function reset() {
    setSeconds('')
    setIsActive(false)
  }

  let interval

  // runs timer when isActive is true
  useEffect(() => {
    interval = null;
    if (props.runTimer) {
      setSeconds(props.seconds)
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1000)
      }, 1000)
    } else if (!props.runTimer && interval) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [props.runTimer])


  // clear timer when it gets to zero
  useEffect(() => {
    console.log('third hook')
    if (props.runTimer && seconds === 0) {
      reset()
      moveToNextStage(props.gameId)
    }
  }, [seconds, props.runTimer, props.gameId, interval])

  return (
    <h1>{props.runTimer ? seconds/1000 : ''}</h1>
  )
}

