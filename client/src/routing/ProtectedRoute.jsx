import React from 'react'
import { AuthContext } from '../contexts/authContext'
import { Navigate } from 'react-router'
import Spinner from '../components/spinner/Spinner'
import { useContext } from 'react'
import Navbar from '../components/navbar/Navbar'


const ProtectedRoute = ({component : Component}) => {
    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext)
    if (authLoading)
        return (
            <div className='flex items-center justify-center'>
                <Spinner />
            </div>
        )
  return (
    isAuthenticated ? (
      <>
        <Navbar />
        <Component />
      </>
    )
      : <Navigate to='/login' />
  )
}

export default ProtectedRoute