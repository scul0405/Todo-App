import React from 'react'

const InputForm = ({placeholder,type}) => {
    if (!type)
        type = 'text'
  return (
    <input className='username block w-full h-10 shadow-sm rounded-lg mb-6 border-b-2 border-blue-400 bg-white pl-4' placeholder={placeholder} type={type}/>
  )
}

export default InputForm