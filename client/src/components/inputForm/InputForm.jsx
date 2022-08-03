import React from 'react'

const InputForm = ({...props}) => {
  return (
    <input {...props} className='username block w-full h-10 shadow-sm rounded-lg mb-6 border-b-2 border-blue-400 bg-white pl-4'/>
  )
}

export default InputForm