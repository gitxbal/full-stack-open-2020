import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hey {props.name}!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Jude"/>
      <Hello name="Selah"/>
      <Hello name="Norah"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))