import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ButtonLog = (props) => {
  if (props.allClicks.length === 0) {
    return(
      <div>
        Begin using the app by pressing one of the buttons above.
      </div>
    )
  }

  return(
    <div>
      <p>Button press log: </p>
      <p>{props.allClicks.join(' ')}</p>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  const resetApp = () => {
    setAll([])
    setRight(0)
    setLeft(0)
  }
  return (
    <main className="container">
      <section className="button-box">
        {left}
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        {right}
      </section>
      <ButtonLog allClicks={allClicks} />
      <Button onClick={resetApp} text="reset" />
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))