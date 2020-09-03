import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
  const {counter} = props
  return (
    <>
      <h1>{counter}</h1>
    </>
  )
}

let counter = 1
ReactDOM.render(
  <App counter={counter} />, 
  document.getElementById('root')
  )
  
  const refresh = () => {
    ReactDOM.render(<App counter={counter} />, 
    document.getElementById('root'))
  }
  
  setInterval(() => {
    refresh()
    counter += 1
  }, 1000)