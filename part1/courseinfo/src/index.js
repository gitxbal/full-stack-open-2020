import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <header>
        <h1>{props.course}</h1>
      </header>
    )
  }
  const Parts = (props) => {
    return(
        <p>
          {props.part} {props.exercise}
        </p>
    )
  }
  const Content = (props) => {
      const parts = {
        part1: 'Fundamentals of React',
        part2: 'Using props to pass data',
        part3: 'State of a component'
      }
    return(
      <main>
        <Parts  
          part={parts.part1}
          exercise={props.exercises.exercises1}/>
        <Parts  
          part={parts.part2}
          exercise={props.exercises.exercises2}/>
        <Parts  
          part={parts.part3}
          exercise={props.exercises.exercises3} />
      </main>
    )
  }
  
  const Total = (props) => {
    return(
      <footer>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </footer>
   )
  }
  
  const App = () => {
    const course = 'Half Stack application development'

    const exercises = {
      exercises1: 10,
      exercises2: 7,
      exercises3: 14
    }
    
    return (
      <div>
        <Header course={course} />
        <Content 
          exercises={exercises} />
        <Total         
          exercises1={exercises.exercises1}
          exercises2={exercises.exercises2}
          exercises3={exercises.exercises3} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))