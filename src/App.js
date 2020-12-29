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
    this.updateGameState()    
  }

  componentWillUnmount() {
    clearTimeout(this.intervalId)
  }

  updateGameState = () => {
    axios({
      method: 'post',
      url: '/api/updategamestate',
      data: {
        gameId: this.state.gameId
      }
    })
    .then(response => {
      let {players, scene, rounds} = response.data
      this.setState({
        players,
        scene,
        rounds
      })
      this.intervalId = setTimeout(this.updateGameState.bind(this), 1000)
    })
    .catch(error => {
      this.intervalId = setTimeout(this.updateGameState.bind(this), 1000)
    })
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
        changeRoundScene={this.changeRoundScene}
      />
    }
  }

  changeScene = async (scene) => {
    this.setState({scene})
    await axios.post('/api/changescene', {
      gameId: this.state.gameId,
      scene
    })
    .then(response => {

    })
    .catch(error => console.log(error.message))
  }

  changeRoundScene = async (stage,turn,timer) => {
    await axios.post('/api/changeroundscene', {
      gameId: this.state.gameId,
      stage,
      turn,
      timer
    })
    .catch(error => console.log(error.message))
  }

  changeGame = (gameId) => {
    this.setState({gameId})
  }

  changeName = (name) => {
    this.setState({name})
  }

  changePlayers = (players) => {
    this.setState({players})
  }
  
  render() {
    return (
      this.chooseView()
    )
  }
}

export default App;
