import React from 'react'
import Header from '../partials/Header'
import Aside from '../aside/Aside'


const Template = (props) => {

  return (
    <>
        <Header />
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
