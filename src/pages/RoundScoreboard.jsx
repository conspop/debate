import { Component } from 'react'
import axios from 'axios'

class RoundScoreboard extends Component {  
  state = {
    timer: ''
  }
  
  componentDidMount() {
    this.createNewRound()
  }

  componentDidUpdate(prevProps) {
    let {rounds} = this.props
    let round = rounds[rounds.length - 1]
    if (rounds.length > 0) {
      if (
        round !== prevProps.rounds[prevProps.rounds.length - 1] &&
        round.timer === true
        ) {
        this.timerController()
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  
  createNewRound = async () => {
    await axios.post('/api/newround', {
      gameId: this.props.gameId,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error.message))
  }

  timerController = () => {
    const currentRound = this.props.rounds[this.props.rounds.length - 1]
    // if (currentRound.roundScene === 'yesopeningtimer') {
      this.setState({timer: 100})
      this.timerId = setInterval(this.handleTick, 1000)
    // }
  }

  handleTick = () => {
    this.setState(state => ({timer: state.timer - 1}))
  }

  whatToRender() {
    if (this.props.rounds.length > 0) {
      const {rounds} = this.props
      const currentRound = rounds[rounds.length - 1]
      return (
        <>
          <div>
            Topic: {currentRound.topic} <br />
            Arguing Yes: {currentRound.yesPlayer} <br />
            Arguing No: {currentRound.noPlayer}
          </div>
          <div>
            <h1>{this.state.timer}</h1>
          </div>
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

export default RoundScoreboard