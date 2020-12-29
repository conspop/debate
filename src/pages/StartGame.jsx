import { Component } from 'react'
import axios from 'axios'

// this page would be the same regardless of scoreboard or player

class StartGame extends Component {  
  state = {
    gameInput: '',
    nameInput: '',
  }
  
  createNewGame = async () => {
    axios({
      method: 'post',
      url: '/api/newgame',
    })
    .then(response => {
      this.props.changeGame(response.data)
      this.props.changeName('scoreboard')
      this.props.changeScene('gather')
    })
    .catch(error => console.log(error.message))
  }

  handleInputChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  joinGame = () => {
    axios({
      method: 'post',
      url: '/api/joingame',
      data: {
        gameId: this.state.gameInput,
        name: this.state.nameInput
      }
    })
    .then(response => {
      this.props.changeGame(response.data.gameId)
      this.props.changeName(this.state.nameInput)
      this.props.changeScene('gather')
    })
    .catch(error => console.log(error.message))
  }
  
  render() {
    return (
      <div>
        <button
          onClick={this.createNewGame}
        >
          New Game
        </button>
        <br />
        <br />
        Game Id: <input
          id='gameInput'
          value={this.state.gameInput}
          onChange={this.handleInputChange}
        ></input>
        <br />
        Name: <input
          id='nameInput'
          value={this.state.nameInput}
          onChange={this.handleInputChange}
        ></input>
        <br />
        <button
          onClick={this.joinGame}
        >
          Join Game  
        </button> 
      </div>
    )
  }
}

export default StartGame;
