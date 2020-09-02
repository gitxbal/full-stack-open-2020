import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  const name = props.name
  const age = props.age
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
 return( 
  <>
    <p>Hey {name}, you are {age} years old!</p>
    <p>So you were probably born in {bornYear()}</p>
  </>
)
}

const Header = () => {
  return (
    <>
      <h1>Hey! Hey! People!</h1>
      <h2>React Age Calculator App</h2>
    </>
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
const age = 1

return (
<>
  <Header />
  <Hello name="Selah" age={5} />
  <Hello name="Norah" age={3} />
  <Hello name={name} age={age} />
  <Footer />
</>
)
}

ReactDOM.render(<App />, document.getElementById('root'))