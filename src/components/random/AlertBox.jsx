import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertBox = (props) => {
  return (
    <>{
      props.alert &&
    <Alert severity="success" sx={{fontSize: "1.5rem", position: "absolute", width: "100%", zIndex: "2"}}>
    <AlertTitle sx={{fontSize: "1.5rem"}} > <strong>Success </strong> </AlertTitle>
    { props.alert }
    </Alert>
    }
    </>
  )
}

export default AlertBox
