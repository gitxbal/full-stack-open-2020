import React, { useState, useEffect } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import itemsService from './services/items'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('... add a new person')
  const [ newNumber, setNewNumber ] = useState('... add a new number')
  const [showAll, setShowAll] = useState(true)
  const [filterName, setFilterName] = useState('')
  const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const [ toggle , setToggle ] = useState(false)
  const [errorMessage, setErrorMessage] = useState('some error happened...')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    console.log('effect')
    itemsService
      .getAll()
      .then(initialItems => {
        console.log('promise fulfilled')
        setPersons(initialItems)
      })
  }, [toggle])

  const addPerson = (event) => {
    event.preventDefault()
    if (newName === '... add a new person' || newNumber ==='... add a new number') {
      return alert('Please fill out all fields')
    }

    if (!phoneNumberRegex.test(newNumber)) {
      return alert('Please enter a valid 10-digit phone number')
    }
    if (persons.some(item => item.name === newName) && persons.some(item => item.number === newNumber)) {
      return alert(`${newName} is already added to phonebook`)
    }
    if (persons.some(item => item.name === newName)) {
      let updatedPerson = persons.filter(item => item.name === newName)
      let updateId = updatedPerson.map(item => item.id)
      updateId = updateId[0]
      
      const newPersonObject = {
        date: new Date().toISOString(),
        id: updateId,
        name: newName,
        number: newNumber
      }
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) 
      if (!confirmUpdate) {
        return
      }

      itemsService
        .update(updateId, newPersonObject)
        .then(updatedPersons => {
          setPersons(updatedPersons)
          setNewName('')
          setNewNumber('')
          setToggle(!toggle)
        })
        .then(message => {
          setErrorMessage(
            `Updated ${newName}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setIsError(true)
          setErrorMessage(
            `Information of ${newName} has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
            setErrorMessage(false)
          }, 5000)
        })
      return console.log(`update fulfilled`)
      
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

    itemsService
      .create(personObject)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setNewNumber('')
      })
      .then(message => {
        setErrorMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      .catch(error => {
        setIsError(true)
        setErrorMessage(
          `While adding ${newName} the following error occurred: ${error}`
        )
        setTimeout(() => {
          setErrorMessage(null)
          setIsError(false)
        }, 5000)
      })
  }

  const deletePerson = (name, id) => {
    const confirmDelete = window.confirm(`Delete ${name}?`) 
    if (!confirmDelete) {
      return
    }
    const deletedPerson = newName
    itemsService
      .deleteItem(id)
      .then(() => setToggle(!toggle))  
      .then(message => {
        setErrorMessage(
          `Deleted ${deletedPerson}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      .catch(error => {
        setIsError(true)
        setErrorMessage(
          `While deleting ${deletedPerson} the following error occurred: ${error}`
        )
        setTimeout(() => {
          setIsError(false)
          setErrorMessage(null)
        }, 5000)
      }) 
  }

  const sendToPersonForm = (name, number) => {
    setNewName(name) 
    setNewNumber(number) 
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
      <header id="one">
        <h1>Phonebook</h1>
        <Notification message={errorMessage} errorToggle={isError} />
        <Filter filterName={filterName}
          handleFilterChange={handleFilterChange} />
      </header>
      <section id="two">
        <h2>add a new number</h2>
        <PersonForm addPerson={addPerson}
          newName={newName}
          handlePersonNameChange={handlePersonNameChange}
          newNumber={newNumber}
          handlePersonNumberChange={handlePersonNumberChange} />
      </section>
      <section id="three">
        <h2>Numbers</h2>
        <Persons 
          itemsToShow={itemsToShow} 
          deletePerson={deletePerson} 
          sendToPersonForm={sendToPersonForm} />
      </section>
    </>
  )
}

export default App