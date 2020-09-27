import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({courses}) => {

    return (
      <>
        <h1>Web development curriculuum</h1>
        {courses.map(course => 
          <>
            <Header   name={course.name} />
            <Content  parts={course.parts} />
            <Total    parts={course.parts} />
          </>
        )}
        </>
    )
}

export default Course