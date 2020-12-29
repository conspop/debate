import { Component } from 'react'

class StartTimerButton extends Component {
  handleClick = () => {
    if (this.props.currentRound. === 'yesopeningwait') {
      this.props.changeRoundScene('opening','yes',true)
    }
  }
  
  render() {
    return (
      <>
        <button
          onClick={this.handleClick}
        >
          Start Timer
        </button>
      </>
    )
  }
}

export default StartTimerButton