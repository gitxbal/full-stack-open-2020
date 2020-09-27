import React from 'react'

const Total = ({ parts }) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = parts.map( part => part.exercises)
      .reduce(reducer)
    return(
      <p><strong>Total of {sum} exercises</strong></p>
    ) 
  }

export default Total