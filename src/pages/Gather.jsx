import { Component } from 'react'
import axios from 'axios'
import GatherScoreboard from './GatherScoreboard'
import GatherPlayer from './GatherPlayer'

class Gather extends Component {
  chooseView = () => {
    if (this.props.name === 'scoreboard') {
      return (
        <div>
          <GatherScoreboard 
            gameId={this.props.gameId}
            players={this.props.players}
            changeScene={this.props.changeScene}
          />
        </div>
      )
    } else {
      return (
        <div>
          <GatherPlayer />
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

export default Gather