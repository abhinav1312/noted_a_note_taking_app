
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../../context/AlertContext'

const Protected = (props) => {
    const handleAlertMsg = useContext(AlertContext).handleAlertMsg
    const {Component} = props
    const navigate = useNavigate();
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem("demo-token")
        if(!isLoggedIn){
            navigate('/')
            handleAlertMsg("error", "Please login to continue")
            return;
        }
    })

    return (
        <>
        { Component } 
        </>
    )
        
}

export default Protected
