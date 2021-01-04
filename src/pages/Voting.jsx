import { Component } from 'react'
import VotingScoreboard from './VotingScoreboard'
import VotingPlayer from './VotingPlayer'

class Voting extends Component {
  chooseView = () => {
    if (this.props.name === 'scoreboard') {
      return (
        <div>
          <VotingScoreboard 
            {...this.props}
          />
        </div>
      )
    } else {
      return (
        <div>
          <VotingPlayer
            {...this.props}
          />
        </div>
      )
    }
  }
  
  render() {
    return (
      <div>
        {this.chooseView()}
      </div>
    )
  }
}

export default Voting