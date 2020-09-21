import React from 'react'
import Content from './Content'
import Header from './Header'

const Course = ({course}) => {

    return (
        <>
          <Header course={course} />
          <Content course={course} />
          {/* <Total course={course} /> */}
        </>
      )
}

export default Course