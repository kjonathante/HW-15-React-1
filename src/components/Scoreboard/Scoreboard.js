import React from 'react'
import logo from '../../assets/images/logo.svg'
import './Scoreboard.css'
const Scoreboard = props => {
  const result = props.correct ? "Correct" : "Incorrect"
  return (
    <nav className="Scoreboard">
      <div className="Scoreboard-div">
        <img className="Scoreboard-logo" src={logo}/>
        <span className="Scoreboard-logotext">Clicky Game</span>
      </div>
      <div className="Scoreboard-div">
        <span className="Scoreboard-logotext">{result}</span>
      </div>
      <div className="Scoreboard-div">
        <span className="Scoreboard-logotext">Score: {props.score} | Top Score: {props.topScore}</span>
      </div>
    </nav>
  )
}

export default Scoreboard