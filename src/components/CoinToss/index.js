// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headCount: 0,
    tailCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {headCount, tailCount, imageUrl} = this.state

    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count-name">Total: {headCount + tailCount}</p>
            <p className="count-name">Heads: {headCount}</p>
            <p className="count-name">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
