import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Buttons = ({handleNext, handleVote}) => (
      <section>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </section>
)
const PopularAnecdotes = ({anecdote, votes}) => (
  <>
    <h1>Anecdote with most votes</h1>
    <section>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </section>
  </>
)


const SelectedAnecdote = ({anecdotes, selected, points}) => (
  <>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}</p>
    <p>has {points[selected]} votes</p>
  </>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const initialPoints = new Array(anecdotes.length).fill(0)
  const [points, setPoints] = useState(initialPoints)
  const [popular, setPopular] = useState('If it hurts, do it more often')
  const [popularPoints, setPopularPoints] = useState(0)
  
  const max = Math.max(...points);
    
  const handleVote = () => {  
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
    const pointsLeader = Math.max(...copy)
    setPopularPoints(pointsLeader)
    const leaderQuote = anecdotes[copy.indexOf(Math.max(...copy))]
    setPopular(leaderQuote)
  }

  const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max))
  const handleNext = () => {
    const newIndex = getRandomNumber(anecdotes.length)
    setSelected(newIndex)
  }
  return (
    <>
      <SelectedAnecdote anecdotes={anecdotes} selected={selected} points={points} />
      <Buttons handleVote={handleVote} handleNext={handleNext} />
      <PopularAnecdotes anecdote={popular} votes={popularPoints}/>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
