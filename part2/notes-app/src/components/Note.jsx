import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
  ? 'make not important' : 'make important'
  return (
    <li style={{marginBottom: "0.5rem"}}>
      {note.content}
        <button style={{marginLeft: "1rem"}}onClick={toggleImportance}>{label}</button>
    </li>

  )
}

export default Note