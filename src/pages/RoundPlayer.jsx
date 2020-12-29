import { Component } from 'react'
import StartTimerButton from '../components/StartTimerButton'

class RoundPlayer extends Component {
  whatToRender() {
    if (this.props.rounds.length > 0) {
      const {rounds} = this.props
      const currentRound = rounds[rounds.length - 1]
      // If the player is the yes player
      if (this.props.name === currentRound.yesPlayer) {
        // and it is yes turn
        if (currentRound.turn === 'yes') {
          return (
            <>
              Hi, {this.props.name} <br />
              Handicap: {currentRound.yesHandicap}
              <StartTimerButton 
                currentRound={currentRound} 
                changeRoundScene={this.props.changeRoundScene}
              /> 
            </>
          )
        // and it is no turn
        } else {
          return (
            <>
              Hi, {this.props.name} <br />
              Handicap: {currentRound.yesHandicap}
            </>
          )
        }
      // If the player is the no player
      } else if (this.props.name === currentRound.noPlayer) {
        // and it is no turn
        if (currentRound.turn === 'no') {
          return (
            <>
              Hi, {this.props.name} <br />
              Handicap: {currentRound.noHandicap}
              <StartTimerButton 
                currentRound={currentRound} 
                changeRoundScene={this.props.changeRoundScene}
              /> 
            </>
          )
        // and it is no turn
        } else {
          return (
            <>
              Hi, {this.props.name} <br />
              Handicap: {currentRound.noHandicap}
            </>
          )
        }
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

export default RoundPlayer