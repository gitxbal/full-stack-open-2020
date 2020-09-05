import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const DisplayCounter = ({counter}) => (
    <h1>{counter}</h1>
  )

const Button = ({buttonType, handleClick, text}) => (
    <button className={buttonType} onClick={handleClick}>
      {text}
    </button>
)

const DisplayButtons = ({counter, setCounter}) => {
  
  const addOne = () => {setCounter(counter + 1)}
  const minusOne = () => {
    setCounter(counter - 1)
    if(counter<1){
      return setCounter(0)
    }
  }
  const resetCounter = () => setCounter(0)
  return(
      <section>
        <Button 
          buttonType="btn" 
          handleClick={addOne}
          text="👍"/>
        <Button 
          buttonType="btn" 
          handleClick={minusOne}
          text="👎"/>
        <Button 
          buttonType="btn alt-btn" 
          handleClick={resetCounter}
          text="Reset"/>
      </section>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  
  // setTimeout(
  //   () => setCounter(counter + 1),
  // 1000
  // )

  console.log('rendering...', counter)

  return (
    <main className="container">
      <DisplayCounter counter={counter} />
      <DisplayButtons counter={counter} setCounter={setCounter}/>
    </main>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
  )