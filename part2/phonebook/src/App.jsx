import React, { useState, useEffect } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import itemsService from './services/items'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('... add a new person')
  const [ newNumber, setNewNumber ] = useState('... add a new number')
  const [showAll, setShowAll] = useState(true)
  const [filterName, setFilterName] = useState('')
  const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const [ deleted , setDeleted ] = useState(0)

  useEffect(() => {
    console.log('effect')
    itemsService
      .getAll()
      .then(initialItems => {
        console.log('promise fulfilled')
        setPersons(initialItems)
      })
  }, [deleted])

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

    const maxId = persons.reduce(
      (max, person) => (person.id > max ? person.id : max),
      persons[0].id
    )

    const personObject = {
      date: new Date().toISOString(),
      id: maxId + 1,
      name: newName,
      number: newNumber,
    }

    itemsService.
      create(personObject)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = (event) => {
    const confirmDelete = window.confirm(`Delete ${event.target.name}?`) 
    if (!confirmDelete) {
      return
    }
    itemsService
    .deleteItem(event.target.className)
    .then(() => setDeleted(deleted + 1))   
  }

  const handlePersonNameChange = (event) => {
    let string = event.target.value
    const capitalizeOnlyFirstLetter = s =>  s.toLowerCase().replace( /\b./g, a => a.toUpperCase() )
    string = capitalizeOnlyFirstLetter(string)
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
      <Persons itemsToShow={itemsToShow} deletePerson={deletePerson} />
    </>
  )
}

export default App