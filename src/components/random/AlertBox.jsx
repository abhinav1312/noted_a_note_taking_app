import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertBox = ({severity, alertMsg}) => {
  return (
    <>{
      alertMsg &&
    <Alert severity= {severity} sx={{fontSize: "1.5rem", position: "absolute", width: "100%", zIndex: "2"}}>
    <AlertTitle sx={{fontSize: "1.5rem"}} > <strong> {severity} </strong> </AlertTitle>
    { alertMsg }
    </Alert>
    }
    </>
  )
}

export default AlertBox
