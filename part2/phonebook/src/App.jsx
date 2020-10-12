import React, { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { date: "2020-09-28T14:29:52.146Z", id: 1 , name: 'Bob Loblaw', number: '(555) 555-5555' },
    { date: "2020-10-12T08:21:05.322Z", id: 2 , name: 'Gob Bluth', number: '(617) 382-8888' },
    { date: "2020-10-12T08:21:05.322Z", id: 3 , name: 'Tobias Fünke', number: '(838) 929-3768' },
    { date: "2020-10-12T08:21:05.322Z", id: 4 , name: 'Michael Bluth', number: '(689) 838-8383' },
    { date: "2020-10-12T08:21:05.322Z", id: 5 , name: 'George Bluth Sr.', number: '(987) 654-4321' },
    { date: "2020-10-12T08:21:05.322Z", id: 6 , name: 'Lindsay Bluth Fünke', number: '(468) 273-4629' },
    { date: "2020-10-12T08:21:05.322Z", id: 7 , name: 'George Michael Bluth', number: '(876) 543-2121' },
  ]) 
  const [ newName, setNewName ] = useState('... add a new person')
  const [ newNumber, setNewNumber ] = useState('... add a new number')
  const [showAll, setShowAll] = useState(true)
  const [filterName, setFilterName] = useState('')
  const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const addPerson = (event) => {
    event.preventDefault()
    if (newName === '... add a new person' || newNumber ==='... add a new number') {
      return alert('Please fill out all fields')
    }

    if (!phoneNumberRegex.test(newNumber)) {
      return alert('Please enter a valid 10-digit phone number')
    }
    if (persons.some(item => item.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }

    const personObject = {
      date: new Date().toISOString(),
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonNameChange = (event) => {
    let string = event.target.value
    string.toLowerCase()
    string.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase())
    setNewName(string)
  }
  const handlePersonNumberChange = (event) => {
    const formattedPhoneNumber = event.target.value.replace(phoneNumberRegex, "($1) $2-$3")
    setNewNumber(formattedPhoneNumber)
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
    setShowAll(!showAll)
  }

  const itemsToShow = showAll 
  ? persons 
  : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <>
      <h1>Phonebook</h1>
      <Filter filterName={filterName}
        handleFilterChange={handleFilterChange} />
      <h2>add a new number</h2>
      <PersonForm addPerson={addPerson}
        newName={newName}
        handlePersonNameChange={handlePersonNameChange}
        newNumber={newNumber}
        handlePersonNumberChange={handlePersonNumberChange} />
      <h2>Numbers</h2>
      <Persons itemsToShow={itemsToShow} />
    </>
  )
}

export default App