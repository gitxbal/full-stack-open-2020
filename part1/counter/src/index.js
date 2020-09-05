import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  
  // setTimeout(
  //   () => setCounter(counter + 1),
  // 1000
  // )

  const handleClick = () => {setCounter(counter + 1)}

  console.log('rendering...', counter)

  return (
    <main className="container">
      <h1>{counter}</h1>
      <button className="btn" onClick={handleClick}>
        👍
      </button>
      <button className="btn alt-btn" onClick={() => setCounter(0)}> 
        Reset
      </button>
    </main>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
  )