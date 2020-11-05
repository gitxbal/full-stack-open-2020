import React from 'react'

const Footer = () => {
    const footerStyle = {
      color: 'darkBlue',
      fontStyle: 'italic',
      fontweight: 900,
      fontSize: "1.25rem",
      marginTop: "2rem"
    }
    return (
      <div style={footerStyle}>
        <em>Notes app, Eliot Sanford, Coding Book Club 2020</em>
      </div>
    )
  }

export default Footer