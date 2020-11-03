import React from 'react'

const Item = ({ name, number, id, deletePerson, sendToPersonForm}) => {    
    return (
    <>
      <tr style={{paddingBottom: "1rem", height: "3rem" }}>
        <td></td>
        <td>{name}</td>
        <td style={{paddingLeft: "1rem"}}>{number}</td>
          
        <td>
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
        </td>
        <td>
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
        </td>
      </tr>
    </>
    )
}

export default Item

