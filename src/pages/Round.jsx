import { Component } from 'react'
import RoundScoreboard from './RoundScoreboard'
import RoundPlayer from './RoundPlayer'

const stages = [
  {
    name: 'newRound',
    turn: '',
    timer: '',
    message: ''
  },
  {
    name: 'opening',
    turn: 'yes',
    timer: 1000,
    message: '60 second opening argument for Yes. Click start timer on your device.'
  },
  {
    name: 'opening',
    turn: 'no',
    timer: 1000,
    message: '60 second opening argument for No. Click start timer on your device.'
  },
  {
    name: 'argument',
    turn: 'yes',
    timer: 1000,
    message: '60 second free argument. Yest, click start timer on your device when you are both ready.'
  },
  {
    name: 'closing',
    turn: 'yes',
    timer: 1000,
    message: '30 second closing argument for Yes. Click start timer on your device.'
  },
  {
    name: 'closing',
    turn: 'no',
    timer: 1000,
    message: '30 second closing argument for No. Click start timer on your device.'
  },
  {
    name: 'winnervoting',
    turn: '',
    timer: '',
    message: 'Vote for the winner on your device.'
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