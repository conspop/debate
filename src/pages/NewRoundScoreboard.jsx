import { Component } from 'react'
import axios from 'axios'

class NewRoundScoreboard extends Component {
  componentDidMount() {
    this.createNewRound()
  }
  
  createNewRound = async () => {
    axios.post('/api/newround', {
      gameId: this.props.gameId,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error.message))
  }

  whatToRender() {
    if (this.props.rounds.length > 0) {
      const {rounds} = this.props
      const currentRound = rounds[rounds.length - 1]
      return (
        <>
          Topic: {currentRound.topic} <br />
          Arguing Yes: {currentRound.yesPlayer} <br />
          Arguing No: {currentRound.noPlayer}
        </>
      )
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

export default NewRoundScoreboard