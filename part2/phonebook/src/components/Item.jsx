import React from 'react'

const Item = ({ name, number, id, deletePerson }) => {    
    return (
    <>
      <li style={{margin: "1rem 0" }}>
          <label htmlFor={`item-${id}`}>{name} {number}</label>
          <button
              id={id}
              name={name}
              onClick={deletePerson}
              style={
                  {marginLeft: "1rem",
                  backgroundColor: "#FD6604", 
                  color: "#FEF2E9", 
                  padding: "0.25rem", 
                  fontWeight: "800"}}>
              delete
            </button>
        </li>
    </>
    )
}

export default Item

