import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalContext'

const ClientPrivateRoute = ({children}) => {
    const {logado} = useGlobalContext()  
    console.log(logado)
  return (
    (logado ? children : <Navigate to="/login" />)
  )
}

export default ClientPrivateRoute   