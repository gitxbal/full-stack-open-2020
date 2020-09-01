import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  console.log('header: ', course);
  
  return(
    <header>
        <h1>{course}</h1>
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
  const Content = ({parts}) => {
      console.log('content: ', parts);
      
      return(
        <main>
        <Parts  
          partName={parts[0].name}
          exercises={parts[0].exercises}/>
        <Parts  
          partName={parts[1].name}
          exercises={parts[1].exercises}/>
        <Parts  
          partName={parts[2].name}
          exercises={parts[2].exercises} />
      </main>
    )
  }
  
  const Total = ({parts}) => {
    console.log('total: ', parts);
    
    return(
      <footer>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </footer>
   )
  }
  
  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
    
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))