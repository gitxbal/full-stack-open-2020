import React from 'react'
import Item from './Item'

const Persons = ({ itemsToShow, deletePerson, sendToPersonForm }) => {
return(
    <>
        <table>
            <tbody>
                {itemsToShow.map(person => 
                    <Item 
                        key={person.id} 
                        name={person.name} 
                        number={person.number} 
                        id={person.id} 
                        deletePerson={deletePerson}
                        sendToPersonForm={sendToPersonForm}/>
                )}
            </tbody>
        </table>
    </>
)}

export default Persons

