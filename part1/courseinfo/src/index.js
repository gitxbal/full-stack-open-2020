import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log('header: ', props);
  
  return(
    <header>
        <h1>{props.course}</h1>
      </header>
    )
  }
  const Parts = ({partName, exercises}) => {
    console.log('parts: ', partName, exercises);
    
    return(
        <p>
          {partName} {exercises}
        </p>
    )
  }
  const Content = (props) => {
      console.log('content: ', props);
      
      return(
        <main>
        <Parts  
          partName={props.part1.name}
          exercises={props.part1.exercises}/>
        <Parts  
          partName={props.part2.name}
          exercises={props.part2.exercises}/>
        <Parts  
          partName={props.part3.name}
          exercises={props.part3.exercises} />
      </main>
    )
  }
  
  const Total = (props) => {
    console.log('total: ', props);
    
    return(
      <footer>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </footer>
   )
  }
  
  const App = () => {
    const course = 'Half Stack application development'
    
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      
      name: 'Using props to pass data',
      exercises: 7
    } 
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
    
    
    return (
      <div>
        <Header course={course} />
        <Content 
          part1={part1}
          part2={part2}
          part3={part3} />
        <Total         
          exercises1={part1.exercises}
          exercises2={part2.exercises}
          exercises3={part3.exercises} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))