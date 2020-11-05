import React from 'react'

const Notification = ({message, errorToggle}) => {
    if (message === null) {
        return null
      }
    return (

        <div className={(errorToggle) ? "error notice" : "success notice"}>
            {message}
        </div>
    )
}

export default Notification