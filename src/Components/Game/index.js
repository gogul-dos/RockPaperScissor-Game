import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import './index.css'

class Game extends Component {
  state = {
    score: 0,
    game: true,
    computerOption: '',
    userOption: '',
    textMessage: '',
  }

  optionSelected = id => {
    const {choicesList} = this.props
    const {score} = this.state
    let newScore = score
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    const computerChoice = choicesList[randomNumber]
    let textMessage
    if (id === computerChoice.id) {
      textMessage = 'IT IS DRAW'
    } else if (
      (computerChoice.id === 'ROCK' && id === 'PAPER') ||
      (id === 'SCISSORS' && computerChoice.id === 'PAPER') ||
      (id === 'ROCK' && computerChoice.id === 'SCISSORS')
    ) {
      textMessage = 'YOU WON'
    } else {
      textMessage = 'YOU LOSE'
    }
    if (textMessage === 'YOU WON') {
      newScore = score + 1
    } else if (textMessage === 'YOU LOSE') {
      newScore = score - 1
    }
    const [computerImage] = choicesList.filter(
      eachItem => eachItem.id === computerChoice.id,
    )
    const [userImage] = choicesList.filter(eachItem => eachItem.id === id)
    console.log(computerImage)
    this.setState({
      score: newScore,
      computerOption: computerImage.imageUrl,
      userOption: userImage.imageUrl,
      game: false,
      textMessage,
    })
  }

  playAgainClicked = () => {
    this.setState({game: true})
  }

  render() {
    const {choicesList} = this.props
    const {score, game, userOption, computerOption, textMessage} = this.state
    const scoreStyle = {
      fontFamily: 'Roboto',
    }
    return (
      <div className="main-container">
        <div className="header-container">
          <h1 className="header">
            Rock <br />
            Paper <br /> Scissors
          </h1>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p className="score-para">score: </p>
            <p className="score-para" style={scoreStyle}>
              {score}
            </p>
          </div>
        </div>
        {game && (
          <div className="choices-container">
            <ul>
              {choicesList.map(eachItem => (
                <li key={eachItem.id}>
                  <button
                    type="button"
                    data-testid={eachItem.testId}
                    label="list-item"
                    onClick={() => this.optionSelected(eachItem.id)}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.id}
                      className="icon-image"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!game && (
          <div className="result-container">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div>
                <p>You</p>
                <img
                  src={userOption}
                  alt="your choice"
                  className="icon-image"
                />
              </div>
              <div>
                <p>Opponent</p>
                <img
                  src={computerOption}
                  alt="opponent choice"
                  className="icon-image"
                />
              </div>
            </div>
            <p>{textMessage}</p>
            <button type="button" onClick={this.playAgainClicked}>
              Play Again
            </button>
          </div>
        )}
        <div>
          <div className="overall-popup-container">
            <Popup
              modal
              trigger={
                <div className="rules-container">
                  <button type="button" className="trigger-button-enable">
                    Rules
                  </button>
                </div>
              }
            >
              {close => (
                <div className="popup-container">
                  <div className="close-button">
                    <button
                      label="closeButton"
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine />
                    </button>
                  </div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                    alt="rules"
                    className="rules-image"
                  />
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    )
  }
}
export default Game
