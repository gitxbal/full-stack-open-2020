import React, { useState } from 'react'
import Item from './components/Item'

const App = () => {
  const [ persons, setPersons ] = useState([
    { date: "2020-09-28T14:29:52.146Z", id: 1 , name: 'Bob Loblaw', number: '555-555-5555' },
    { date: "2020-09-28T14:29:52.146Z", id: 2 , name: 'Gob Bluth', number: '617-382-8888' },
    { date: "2020-09-28T14:29:52.146Z", id: 3 , name: 'Tobias Fünke', number: '838-929-3768' },
    { date: "2020-09-28T14:29:52.146Z", id: 4 , name: 'Michael Bluth', number: '689-838-8383' },
  ]) 
  const [ newName, setNewName ] = useState('... add a new person')
  const [ newNumber, setNewNumber ] = useState('... add a new number')
  const [showAll, setShowAll] = useState(true)
  const [filterName, setFilterName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      date: new Date().toISOString(),
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }
    if (persons.some(item => item.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePersonNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const itemsToShow = showAll 
  ? persons 
  : persons.filter(person => person.name.includes(filterName))

  return (
    <>
      <h1>Phonebook</h1>
      <label>filter shown with <input 
        type="text"
        value={filterName}
        onChange={(event) => {
          setFilterName(event.target.value)
          setShowAll(!showAll)
        }} /> 
      </label>
      <h2>add a new number</h2>
      <form onSubmit={addPerson}>
        <label style={{display: "block"}}>name: <input
                type="text"
                value={newName}
                onChange={handlePersonNameChange} />
        </label>
        <label style={{display: "block", margin: "1rem 0" }}>number: <input
                type="tel"
                value={newNumber}
                onChange={handlePersonNumberChange} />
        </label>
        <section>
          <button type="submit">add</button>
        </section>
      </form>
      <h2>Numbers</h2>
      <section>
        <ul>
          {itemsToShow.map(person => 
            <Item key={person.id} name={person.name} number={person.number} />
          )}
        </ul>
      </section>
    </>
  )
}

export default App