import React, { useState } from 'react'
import AlertContext from './AlertContext'


const AlertState = (props) => {
    const [alertMsg, setAlertMsg] = useState({message: '', severity: ''});

    const handleAlertMsg = (severity, message) => {
      setAlertMsg({severity: severity, message: message});
      setTimeout(() => {
        setAlertMsg({message: '', severity: ''});
      }, 2000);
     }
  return (
    <>
     <AlertContext.Provider value = {{alertMsg, handleAlertMsg}}>
        { props.children }
    </AlertContext.Provider> 
    </>
  )
}

export default AlertState
