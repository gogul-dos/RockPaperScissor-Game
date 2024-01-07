import Game from './Components/Game'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    testId: 'rockButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    testId: 'scissorsButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    testId: 'paperButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => (
  <div>
    <Game choicesList={choicesList} />
  </div>
)

export default App
