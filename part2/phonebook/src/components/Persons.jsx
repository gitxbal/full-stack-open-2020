import React from 'react'
import Item from './Item'

const Persons = ({ itemsToShow, deletePerson }) => (
    <>
        <section>
            <ul>
                {itemsToShow.map(person => 
                    <Item 
                        key={person.id} 
                        name={person.name} 
                        number={person.number} 
                        id={person.id} 
                        deletePerson={deletePerson}/>
                )}
            </ul>
        </section>
    </>
)

export default Persons

