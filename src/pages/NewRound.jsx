import { Component } from 'react'
import NewRoundScoreBoard from './NewRoundScoreboard'
import NewRoundPlayer from './NewRoundPlayer'

class NewRound extends Component {
  chooseView = () => {
    if (this.props.name === 'scoreboard') {
      return (
        <div>
          <NewRoundScoreBoard
          />
        </div>
      )
    } else {
      return (
        <div>
          <NewRoundPlayer
            name={this.props.name}
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

export default NewRound