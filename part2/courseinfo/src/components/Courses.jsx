import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Courses = ({courses}) => {

    return (
      <>
        {courses.map(course => 
          <>
            <Header course={course} />
            <Content course={course} />
            <Total parts={course.parts} />
          </>
        )}
        </>
    )
}

export default Courses