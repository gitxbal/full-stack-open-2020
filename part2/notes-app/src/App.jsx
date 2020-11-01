import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('... a new note')
  const [showAll, setShowAll] = useState(true)
  
  useEffect(() => {
    console.log('effect')
      noteService
      .getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
    })
  }, [])



const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
  }

  noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
}

const handleNoteChange = (event) => {
  console.log(event.target.value)
  setNewNote(event.target.value)
}

const notesToShow = showAll 
  ? notes 
  : notes.filter(note => note.important === true)

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))      })
  }

return (
  <>
    <h1>Notes</h1>
    <section>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
    </section>
    <ul>
      {notesToShow.map(note => 
        <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
      )}
    </ul>
    <form onSubmit={addNote}>
      <input 
        value={newNote} 
        onChange={handleNoteChange}/>
  <button type="submit" style={{marginLeft: "1rem"}}>save</button>
    </form> 
  </>
)}

  export default App