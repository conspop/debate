import { Component } from 'react'
import axios from 'axios'

class NewRound extends Component {
  intervalId
  
  state = {
    players: ''
  }

  // chooseView = () => {
  //   if (this.props.name === 'scoreboard') {
  //     return (
  //       <div>
  //         <GatherScoreboard 
  //           gameId={this.props.gameId}
  //           players={this.state.players}
  //         />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <GatherPlayer />
  //       </div>
  //     )
  //   }
  // }
  
  render() {
    return (
      <div>
        New Round!
      </div>
    )
  }
}

export default NewRound