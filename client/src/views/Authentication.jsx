import React from 'react'
import LoginForm from '../components/authentication/loginForm'
import RegisterForm from '../components/authentication/registerForm'

const Authentication = ({authRoute}) => {
  return (
    <div>
        {authRoute === 'login' && <LoginForm />}
        {authRoute === 'register' && <RegisterForm />}
    </div>
  )
}

export default Authentication