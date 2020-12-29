import { Component } from 'react'
import NewRoundScoreBoard from './NewRoundScoreboard'
import NewRoundPlayer from './NewRoundPlayer'

class NewRound extends Component {
  chooseView = () => {
    if (!this.props.rounds) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      )
    } else if (this.props.name === 'scoreboard') {
      return (
        <div>
          <NewRoundScoreBoard
            gameId={this.props.gameId}
            rounds={this.props.rounds}
          />
        </div>
      )
    } else {
      return (
        <div>
          <NewRoundPlayer
            name={this.props.name}
            rounds={this.props.rounds}
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