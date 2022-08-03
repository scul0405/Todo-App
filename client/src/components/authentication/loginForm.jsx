import React from 'react'
import InputForm from '../inputForm/InputForm'
import {Link} from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className='flex flex-col my-8 w-full items-center h-full'>
      <p className='mb-10 text-4xl font-bold text-blue-600'>Login</p>
        <div className='mx-auto w-10/12'>
          <InputForm placeholder='Username'/>
          <InputForm placeholder='Password' type='password' />
        </div>
        <button className='bg-green-400 border-2 border-green-500 font-bold text-white w-40 h-10 rounded-full mt-2 mb-8 hover:bg-white hover:text-green-500 hover:-translate-y-1 hover:duration-all-300 transition-all'>LOGIN NOW</button>
      <div>Do not have an account ? <Link to='/register' className='text-blue-400 hover:text-blue-600 sm:block sm:text-center md:inline-block'>Register now</Link></div>
    </div>
  )
}

export default LoginForm