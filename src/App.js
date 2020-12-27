import { Component } from 'react'

//page imports
import StartGame from './pages/StartGame'
import Gather from './pages/Gather'

class App extends Component {
  state = {
    gameId: '',
    scene: 'startgame',
    name: '',
    players: ''
  }

  chooseView = () => {
    const {scene} = this.state
    if (scene === 'startgame') {
      return <StartGame 
        changeScene={this.changeScene}
        changeGame={this.changeGame}
        changeName={this.changeName}
      />
    } else if (scene === 'gather')
      return <Gather 
        {...this.state}
        changeScene={this.changeScene}
      />
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
