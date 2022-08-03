import React from 'react'
import LoginForm from '../components/authentication/loginForm'
import RegisterForm from '../components/authentication/registerForm'
import landingImg from '../assets/landing.jpg'

const Authentication = ({authRoute}) => {
  return (
    <div className='landing-page w-screen flex items-center justify-center h-screen'>
      <div className='w-10/12 sm:w-5/12 lg:w-4/12 sm:ml-5 flex flex-col'>
        <div className='text-container mb-12'>
          <p className='text-3xl font-bold uppercase mb-5'>Don't forget anything <span className='text-5xl text-blue-800'>important</span></p>
          <p className='text-gray-500 sm:hidden lg:block'>By keeping such a list, you make sure that your tasks are written down all in one place so you don't forget anything important. And by prioritizing tasks, you plan the order in which you'll do them, so that you can tell what needs your immediate attention, and what you can leave until later.</p>
        </div>
        <div className='shadow-xl rounded-xl bg-blue-50'>
          {authRoute === 'login' && <LoginForm />}
          {authRoute === 'register' && <RegisterForm />}
        </div>
      </div>
      <div className='hidden sm:w-7/12 lg:w-8/12 h-full sm:block'>
        <img className='w-full h-full' src={landingImg} alt="landing-img" />
      </div>
    </div>
  )
}

export default Authentication