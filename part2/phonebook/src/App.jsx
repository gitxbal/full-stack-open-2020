import React, { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [ persons, setPersons ] = useState([
    { date: "2020-09-28T14:29:52.146Z", id: 1 , name: 'Bob Loblaw'}
  ]) 
  const [ newName, setNewName ] = useState('... add a new person')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      date: new Date().toISOString(),
      id: persons.length + 1,
      name: newName,
    }
    if (persons.some(item => item.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <label>
          name: <input
                  value={newName}
                  onChange={handlePersonNameChange} />
        </label>
        <section>
          <button type="submit">add</button>
        </section>
      </form>
      <h2>Numbers</h2>
      <section>
        <ul>
          {persons.map(person => 
            <Name key={person.id} name={person.name} />
          )}
        </ul>
      </section>
    </>
  )
}

export default App