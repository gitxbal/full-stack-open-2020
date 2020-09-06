import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <main className="container">
      <section className="button-box">
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </section>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))