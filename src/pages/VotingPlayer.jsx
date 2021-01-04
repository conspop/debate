import React from 'react'

function DoesNotVote(props) {
  return <div>Chill! The other players are voting.</div>
}

function DoesVote(props) {
  return <div>You gotta vote!</div>
}

export default function VotingPlayer (props) {
  const {rounds, name} = props
  const round = rounds[rounds.length - 1]
  if (name === round.yesPlayer || name === round.noPlayer) {
    return <DoesNotVote {...props} />
  } else {
    return <DoesVote {...props} />
  }
}