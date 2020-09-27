import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
    return (
      <>
        <table>
          <tbody>
            {course.parts.map(part => 
              <Part key={part.id} name={part.name} exercises={part.exercises}/>)
            }
          </tbody>
        </table>
      </>
    )
  }

export default Content