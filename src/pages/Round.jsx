import { Component } from 'react'
import RoundScoreboard from './RoundScoreboard'
import RoundPlayer from './RoundPlayer'

class Round extends Component {
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
          <RoundScoreboard
            gameId={this.props.gameId}
            rounds={this.props.rounds}
          />
        </div>
      )
    } else {
      return (
        <div>
          <RoundPlayer
            name={this.props.name}
            rounds={this.props.rounds}
            changeRoundScene={this.props.changeRoundScene}
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

export default Round