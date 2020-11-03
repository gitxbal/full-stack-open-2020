import React from 'react'

const Item = ({ name, number, id, deletePerson, sendToPersonForm}) => {    
    return (
    <>
      <li style={{margin: "1rem 0" }}>
          <label htmlFor={`item-${id}`}>{name} {number}</label>
          <button
              onClick={() => sendToPersonForm(name, number)}
              style={
                  {marginLeft: "1rem",
                  backgroundColor: "#BFDFC9", 
                  color: "#8F1E5D", 
                  padding: "0.25rem", 
                  fontWeight: "800"}}>
              update
            </button>
          <button
              onClick={() => deletePerson(name, id)}
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

