import React from 'react'
import FieldBox from './FieldBox'

const PersonForm = ({ addPerson, newName, handlePersonNameChange, newNumber, handlePersonNumberChange }) => (
    <>
        <form onSubmit={addPerson}>
            <FieldBox htmlFor="name"
                type="text"
                autoComplete="name"
                value={newName}
                handleFunction={handlePersonNameChange} />
            <FieldBox htmlFor="number"
                type="tel"
                autoComplete="tel"
                value={newNumber}
                handleFunction={handlePersonNumberChange} />
            <section style={{width: "225px"}}>
                <button type="submit" style={{width: "100%"}}>add</button>
            </section>
        </form>
    </>
)

export default PersonForm

