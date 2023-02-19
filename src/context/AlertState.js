import React, { useState } from 'react'
import AlertContext from './AlertContext'


const AlertState = (props) => {
    const [alert, setAlert] = useState(null);

    const handleAlert = (message) => {
      setAlert(message);
      setTimeout(() => {
        setAlert(null);
      }, 2000);
     }
  return (
    <>
     <AlertContext.Provider value = {{alert, handleAlert}}>
        { props.children }
    </AlertContext.Provider> 
    </>
  )
}

export default AlertState
