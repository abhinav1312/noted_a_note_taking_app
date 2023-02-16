import React, { useContext } from 'react'
import Header from '../partials/Header'
import Aside from '../aside/Aside'
import AlertBox from './AlertBox'
import AlertContext from '../../context/AlertContext'

const Template = (props) => {
  const alertContext = useContext(AlertContext);
  const alert = alertContext.alert;
  return (
    <>
        <Header />
        <AlertBox alert = {alert} />
        <div className="flex min-h-[100vh]">
          <Aside /> 
          <main className='w-full'>
            {props.children}
          </main>
       </div>
        
    </>
  )
}

export default Template
