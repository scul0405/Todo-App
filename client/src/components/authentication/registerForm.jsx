import React, {useState} from 'react'
import InputForm from '../inputForm/InputForm'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  const [form, setForm] = useState({
    username : '',
    password : '',
    passwordConfirm: ''
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    const newForm = {...form, [name]: value}
    setForm(newForm)
  }

  const handleSubmit = () => {
    console.log(form)
  }
  const {username, password, passwordConfirm} = form
  return (
    <div className='flex flex-col my-8 w-full items-center h-full'>
      <p className='mb-10 text-4xl font-bold text-blue-600'>Register</p>
        <div className='mx-auto w-10/12'>
          <InputForm onChange={handleChange} value={username} required placeholder='Username'/>
          <InputForm onChange={handleChange} value={password} required placeholder='Password' type='password'/>
          <InputForm onChange={handleChange} value={passwordConfirm} required placeholder='Confirm your Password' type='password'/>
        </div>
      <button onClick={handleSubmit} className='bg-green-400 border-2 border-green-500 font-bold text-white w-40 h-10 rounded-full mt-2 mb-2 hover:bg-white hover:text-green-500 hover:-translate-y-1 hover:duration-all-300 transition-all'>REGISTER NOW</button>
      <Link to='/login' className='text-blue-400 hover:text-blue-600 sm:block sm:text-center md:inline-block'>&larr; Back to Login</Link>
    </div>
  )
}

export default RegisterForm