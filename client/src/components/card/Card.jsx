import React, {useContext} from 'react'
import {TodoContext} from '../../contexts/todoContext.js'
import trashBin from '../../assets/trash-bin.svg'
import pen from '../../assets/pen.svg'

const Card = ({ todo: {title, description, status, _id}}) => {
    const {setShowUpdateModal, findUpdateTodo, deleteTodo} = useContext(TodoContext)
    const color = status === 'TO DO' ? 'red' : status === 'DOING' ? 'yellow' : 'green'
    const handlePreUpdateData = () => {
        findUpdateTodo(_id)
        setShowUpdateModal(true)
    }
    const tailwindColorFixed = ( // fix tailwind color loaded
        <div>
            <div className='text-red-500 bg-red-50 border-red-300'>
                <div className='bg-red-700'></div>
            </div>
            <div className='text-yellow-500 bg-yellow-50 border-yellow-300'>
                <div className='bg-yellow-700'></div>
            </div>
            <div className='text-green-500 bg-green-50 border-green-300'>
                <div className='bg-green-700'></div>
            </div>
        </div>
    )
  return (
    <div className={`w-full border-2 border-r-8 border-${color}-300 rounded-lg bg-${color}-50 shadow-md`}>
        <div className='py-2 px-4 flex flex-col justify-between h-full'>
            <div className='mb-2'>
                <p className={`text-${color}-500 text-2xl font-bold mb-2 break-words`}>{title}</p>
                <p className='text-gray-700 break-words'>{description}</p>
            </div>
            <div className='icon-box flex justify-between'>
                <div className='flex items-center'>
                    <div className={`h-2 w-2 rounded-lg bg-${color}-700 mr-1`}>
                    </div>
                    <span className='text-sm font-extrabold text-cyan-600'>
                        {status}
                    </span>
                </div>
                <div className='flex mr-2'>
                    <div className='w-6 h-6 mr-6 cursor-pointer' onClick={handlePreUpdateData}>
                        <img src={pen} alt="change" />
                    </div>
                    <div onClick={() => deleteTodo(_id)} className='w-6 h-6 cursor-pointer'>
                        <img src={trashBin} alt="delete" />
                    </div>
                </div>
            </div>
        </div>
        {false && tailwindColorFixed /* Fix eslint not use warning */} 
    </div>
  )
}

export default Card