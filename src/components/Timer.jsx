import React, {useState} from 'react'

export default function Timer(props) {
  return (
    (props.runTimer) ?
    <h1>{props.stages[props.round.stage].timer / 1000}</h1> :
    'Timer is not started'
  )
}

