import { Component } from 'react'

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

  handleStartGame = () => {
    this.props.changeScene('newround')
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