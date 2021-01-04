import { Component } from 'react'
import axios from 'axios'

class GatherScoreboard extends Component {
  buildPlayerList() {
    return this.props.players.map(player => {
      return (
        <div>
          {player.name}
        </div>
      )
    })
  }

  handleStartGame = async () => {
    await axios.post('/api/changescene', {
      gameId: this.props.gameId,
      scene: 'round'
    })
    .catch(err => console.log(err.message))
    this.props.changeScene('round')
  }
  
  render() {
    return (
      <>
        <h1>{this.props.gameId}</h1>
        <div>
          {this.props.players.length > 0 
          ?
          this.buildPlayerList()
          :
          'There are no players'
          }
        </div>
        <button
          onClick={this.handleStartGame}
        >Start Game</button>
        
      </>
    )
  }

  
}

export default GatherScoreboard