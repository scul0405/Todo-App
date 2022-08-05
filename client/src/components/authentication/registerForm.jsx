import React, {useState, useContext} from 'react'
import InputForm from '../inputForm/InputForm'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'


const RegisterForm = () => {
  const {registerUser} = useContext(AuthContext)
  const [errMsg,setErrMsg] = useState('');
  let bodyNotification = '';
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

  const handleSubmit = async () => {
    try {
      if (username === '' || password === '' || passwordConfirm === '')
        throw new Error('Please fill in all the required fields')
      const response = await registerUser(form)
      if (response.status !== 'success')
      {
        if (response.message === 'Duplicate field value')
          setErrMsg('Username already exists !')
        else if (response.message === 'Wrong password confirm !')
          setErrMsg('Password and confirm password does not match !')
        else
          setErrMsg('Username and password length must be greater or equal to 4 !')
      }
      else {
        setErrMsg('Register success')
      }
    }
    catch(err) {
      setErrMsg(err.message)
    }
  }
  const {username, password, passwordConfirm} = form

  if (errMsg === 'Register success')
    bodyNotification = <p className='text-green-600 font-medium'>{errMsg}</p>
  else
    bodyNotification = <p className='text-red-600 font-medium'>{errMsg}</p>
  return (
    <div className='flex flex-col my-6 w-full items-center h-full'>
      <p className='mb-6 text-4xl font-bold text-blue-600'>Register</p>
        <div className='mx-auto w-10/12'>
          <InputForm onChange={handleChange} name='username' value={username} required placeholder='Username'/>
          <InputForm onChange={handleChange} name='password' value={password} required placeholder='Password' type='password'/>
          <InputForm onChange={handleChange} name='passwordConfirm' value={passwordConfirm} required placeholder='Confirm your Password' type='password'/>
        </div>
      {bodyNotification}
      <button onClick={handleSubmit} className='bg-green-400 border-2 border-green-500 font-bold text-white w-40 h-10 rounded-full mt-2 mb-2 hover:bg-white hover:text-green-500 hover:-translate-y-1 hover:duration-all-300 transition-all'>REGISTER NOW</button>
      <Link to='/login' className='text-blue-400 hover:text-blue-600 sm:block sm:text-center md:inline-block'>&larr; Back to Login</Link>
    </div>
  )
}

export default RegisterForm