import React from 'react'
import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { TodoContext } from '../../contexts/todoContext'

const UpdateTodo = () => {
    const {showUpdateModal, setShowUpdateModal, todoState: {findTodo}, updateTodo} = useContext(TodoContext)
    const [newTodo, setNewTodo] = useState({
        title: '',
        description: '',
        status: '',
    })
    
    // Load data
    useEffect(() => {
        setNewTodo(findTodo)
    },[findTodo])

    const resetNewTodoData = () => {
        setNewTodo(findTodo)
        setShowUpdateModal(false)
    }
    const handleBackdropClose = (e) => {
        if (e.target.id === 'updateModal'){
            resetNewTodoData()
        }
    }

    const handleClose = () => {
        resetNewTodoData()
    }

    const handleFormChange = e => {
        const {name, value} = e.target
        const newForm = {...newTodo, [name]: value}
        setNewTodo(newForm)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateTodo(newTodo, findTodo._id);
        resetNewTodoData()
    }


    const {title, description, status} = newTodo
  return (
    <div>
        {( showUpdateModal && <div>
            <div id='updateModal' onClick={handleBackdropClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[1px] flex justify-center items-center'>
                <div className='bg-white w-10/12 max-w-sm h-[30rem] p-2 relative rounded-lg'>
                    <button onClick={handleClose} className='absolute right-3 top-3 rounded-md bg-red-400 hover:bg-red-500 text-white uppercase px-2 py-1.5'>close</button>
                    <div className='px-3 py-10'>
                        <form onSubmit={handleSubmit}>
                            <h2 className='text-3xl font-bold text-purple-500'>Update A Todo</h2>
                            <div className='my-4'>
                                <label className='block italic font-semibold text-sky-700' htmlFor="title">Title</label>
                                <input onChange={handleFormChange} className='border-2 rounded-md pl-2' type="text" name='title' id='title' value={title} required />
                            </div>
                            <div className='my-4'>
                                <label className='block italic font-semibold text-sky-700' htmlFor="description">Description</label>
                                <textarea onChange={handleFormChange} className='border-2 rounded-md pl-2 mobile:w-[14rem]' rows="5" cols="35" name='description' id='description' value={description} required />
                            </div>
                            <div className='my-4'>
                                <label className=' italic font-semibold text-sky-700' htmlFor='status'>Status : </label>
                                <select onChange={handleFormChange} className='border-2 rounded-md' name='status' id='status' value={status}>
                                    <option value="TO DO">TO DO</option>
                                    <option value="DOING">DOING</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <input className='border-2 bg-indigo-500 hover:bg-indigo-700 font-semibold text-white rounded-lg px-6 py-2 cursor-pointer uppercase' type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> )}
    </div>
  )
}

export default UpdateTodo