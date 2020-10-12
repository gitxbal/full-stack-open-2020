import React from 'react'

const FieldBox = ({ htmlFor, type, autoComplete, value, handleFunction }) => (
    <>
        <div className="field-box">
            <label htmlFor={htmlFor} >{htmlFor}: </label>
            <input
                id={htmlFor}
                type={type}
                autoComplete={autoComplete}
                value={value}
                onChange={handleFunction} required/>
        </div>
    </>
)

export default FieldBox

