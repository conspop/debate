import { Component } from 'react'
import axios from 'axios'

//page imports
import StartGame from './pages/StartGame'
import Gather from './pages/Gather'
import Round from './pages/Round'

class App extends Component {
  intervalId
  
  state = {
    gameId: '',
    scene: 'startgame',
    name: '',
    players: '',
    rounds:''
  }

  componentDidMount = () => {
    if (this.intervalId) {
      clearTimeout(this.intervalId)
    }
    this.updateGameState()    
  }

  componentWillUnmount() {
    clearTimeout(this.intervalId)
  }

  updateGameState = async () => {
    await axios({
      method: 'post',
      url: '/api/updategamestate',
      data: {
        gameId: this.state.gameId
      }
    })
    .then(response => {
      let {players, scene, rounds} = response.data
      this.setState({
        scene,
        players,
        rounds
      })
      console.log('updated')
      this.intervalId = setTimeout(this.updateGameState.bind(this), 1000)
    })
    .catch(error => {
      this.intervalId = setTimeout(this.updateGameState.bind(this), 1000)
    })
  }

  changeScene = (scene) => {
    this.setState({scene})
  }

  changeGame = (gameId) => {
    this.setState({gameId})
  }

  changeName = (name) => {
    this.setState({name})
  }

  chooseView = () => {
    const {scene} = this.state
    if (scene === 'startgame') {
      return <StartGame 
        changeScene={this.changeScene}
        changeGame={this.changeGame}
        changeName={this.changeName}
      />
    } else if (scene === 'gather') {
      return <Gather 
        {...this.state}
        changeScene={this.changeScene}
      />
    } else if (scene === 'newround') {
      return <Round 
        {...this.state}
        changeScene={this.changeScene}
      />
    }
  }
  
  render() {
    return (
      this.chooseView()
    )
  }
}

export default App;
