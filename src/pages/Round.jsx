import { Component } from 'react'
import RoundScoreboard from './RoundScoreboard'
import RoundPlayer from './RoundPlayer'

const stages = [
  {
    name: 'newRound',
    turn: '',
    timer: '',
  },
  {
    name: 'opening',
    turn: 'yes',
    timer: 5000
  },
  {
    name: 'opening',
    turn: 'no',
    timer: 5000
  },

]

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
            {...this.props}
            stages={stages}
          />
        </div>
      )
    } else {
      return (
        <div>
          <RoundPlayer
            {...this.props}
            stages={stages}
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