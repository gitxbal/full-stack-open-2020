import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({name, value}) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistics = (props) => {
  if(props.allFeedback === 0){
    return (
      <p>No feedback given</p>
    )
  }
  return(
    <>
      <table>
        <tbody>
          <Statistic name="good" value={props.good} />
          <Statistic name="neutral" value={props.neutral} />
          <Statistic name="bad" value={props.bad} />
          <Statistic name="all" value={props.allFeedback} />
          <Statistic name="average" value={props.average} />
          <Statistic name="positive" value={props.positive} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setFeedback] = useState([])

  const positive = `${(good/allFeedback.length) * 100} %`

  const getSum = (total, num) => total + num
  const average = allFeedback.reduce(getSum, 0) / allFeedback.length

  const handleGood = () => {
    setFeedback(allFeedback.concat(1))
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setFeedback(allFeedback.concat(0))
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setFeedback(allFeedback.concat(-1))
    setBad(bad + 1)
  }
  
  return (
    <>
      <h1>give feedback</h1>
      <section className="buttons">
        <Button 
          onClick={handleGood}
          text="good"/>
        <Button 
          onClick={handleNeutral}
          text="neutral"/>
        <Button 
          onClick={handleBad}
          text="bad"/>
      </section>
      <h1>statistics</h1>
      <section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          allFeedback={allFeedback.length} 
          average={average}
          positive={positive}/>
      </section>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
