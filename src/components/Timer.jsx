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

  function reset() {
    setSeconds('')
  }

  const moveToVoting = async () => {
    await axios.post('/api/changescene', {
      gameId: props.gameId,
      scene: 'voting'
    })
    .catch(err => console.log(err.message))
    props.changeScene('voting')
  }

  // runs timer when runTimer is true
  useEffect(() => {
    let interval = null;
    if (props.runTimer) {
      setSeconds(props.seconds)
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1000)
      }, 1000)
    } else if (!props.runTimer && interval) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [props.runTimer, props.seconds])

  const {changeScene} = props
  // clear timer when it gets to zero
  useEffect(() => {
    if (props.runTimer && seconds === 0) {
      reset()
      if (props.stage === 5) {
        moveToVoting()
      } else {
        moveToNextStage(props.gameId)
      }
    }
  }, [seconds, props.runTimer, props.gameId, props.stage, changeScene])

  return (
    <h1>{props.runTimer ? seconds/1000 : ''}</h1>
  )
}

