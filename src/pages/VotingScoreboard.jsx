import React from 'react'

export default function VotingScoreboard ({rounds, players}) {
  const round = rounds[rounds.length - 1]
  const votingPlayers = players.filter(
                        player => player.name !== round.yesPlayer && 
                        player.name !== round.noPlayer
                        // will need expression removing those who have already voted
                      ).map(player => player.name)
  console.log(votingPlayers)
  return (
    <>
      <h1>We're ready to vote!</h1>
      <h3>We still need votes from the following players:</h3>
      {votingPlayers.map(player => <div>{player}</div>)}
    </>
  )
}