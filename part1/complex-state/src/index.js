import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1 
    })
  }

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1 
    })
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