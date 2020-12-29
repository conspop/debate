import { Component } from 'react'

class NewRoundPlayer extends Component {
  whatToRender() {
    if (this.props.rounds.length > 0) {
      const {rounds} = this.props
      const currentRound = rounds[rounds.length - 1]
      if (this.props.name === currentRound.yesPlayer) {
        return (
          <>
            Hi, {this.props.name} <br />
            Handicap: {currentRound.yesHandicap}
          </>
        )
      } else if (this.props.name === currentRound.noPlayer) {
        return (
          <>
            Hi, {this.props.name} <br />
            Handicap: {currentRound.noHandicap}
          </>
        )
      } else {
        return (
          <>
            Hi, {this.props.name} <br />
            You are not debating this round.
          </>
        )
      }
    } else {
      return 'Loading Round'
    }
  }
  
  render() {
    return (
      this.whatToRender()
    )
  }
}

export default NewRoundPlayer