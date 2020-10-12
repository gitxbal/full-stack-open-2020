import React from 'react'

const Item = ({ name, number }) => (
    <>
        <li style={{margin: "1rem 0" }}>{name} {number}</li>
    </>
)

export default Item

