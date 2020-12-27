import { Component } from 'react'
import axios from 'axios'

class Gather extends Component {
  intervalId
  
  state = {
    players: ''
  }

  componentDidMount = () => {
    this.updatePlayers()    
  }

  componentWillUnmount() {
    clearTimeout(this.intervalId)
  }

  updatePlayers = () => {
    axios({
      method: 'post',
      url: '/api/updateplayers',
      data: {
        gameId: this.props.gameId
      }
    })
    .then(response => {
      console.log(response)
      this.setState({players: response.data.players})
      this.intervalId = setTimeout(this.updatePlayers.bind(this), 1000)
    })
    .catch(error => console.log(error.message))
  }

  chooseView = () => {
    if (this.props.name === 'scoreboard') {
      return (
        <div>
          {this.state.players ? this.state.players.map(player => player.name) : ''}
        </div>
      )
    } else {
      return (
        <div>
          {this.state.players ? this.state.players.map(player => player.name) : ''}
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