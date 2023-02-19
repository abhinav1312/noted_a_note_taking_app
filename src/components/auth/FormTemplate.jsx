import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const FormTemplate = (props) => {

  const [details, setDetails] = useState({
    email: "",
    password: ""
  })

  const handleDetailChange = (e) => {
    const {name, value} = e.target;
 

    setDetails(prev=>{
      return ({
        ...prev, 
        [name]: value
      })
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  }
  
  return (
    <>
        <div className="text-5xl text-center">

        <div className="tab-selector">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </div>

        <form onSubmit={handleFormSubmit}>
            <input type="email" name="email" id="email" placeholder='enter email' value={details.email} onChange={handleDetailChange}/>
            <input type="password" name="password" placeholder='enter password' value={details.password} onChange={handleDetailChange} />
            <button type="submit"> {props.btnName} </button>
        </form>
        </div> 
    </>
  )
}

export default FormTemplate
