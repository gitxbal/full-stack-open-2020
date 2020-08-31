import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
 return( <div>
  <p>
    Hey {props.name}, you are {props.age} years old!
  </p>
</div>
)
}

const Footer = () => {
  return (
    <>
      <p>Hey! Hey! app created by <a href="https://github.com/techieeliot">Eliot Sanford</a></p>
    </>
  )
}

const App = () => {
const name = 'Jude'
const age = 1.5

return (
<>
  <h1>Hey! Hey!</h1>
  <Hello name="Selah" age={1 + 4} />
  <Hello name={name} age={age} />
  <Footer />
</>
)
}

ReactDOM.render(<App />, document.getElementById('root'))