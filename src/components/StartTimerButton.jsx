import { Component } from 'react'

class StartTimerButton extends Component {
  state = {
    showButton: true
  }

  handleClick = () => {
    this.setState({showButton: false})
    this.props.changeRoundScene(this.props.currentRound.stage,this.props.currentRound.turn,true)
  }
  
  render() {
    return (
      <>
        {this.state.showButton ?
        <button
          onClick={this.handleClick}
        >
          Start Timer
        </button>
        :
        ''
        }
      </>
    )
  }
}

export default StartTimerButton