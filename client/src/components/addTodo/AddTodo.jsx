import React from 'react'
import { useContext, useState } from 'react'
import AddIcon from  '../../assets/add-icon.jpg'
import { TodoContext } from '../../contexts/todoContext'

const AddTodo = () => {
    const {showAddModal, setShowAddModal, createTodo} = useContext(TodoContext)
    
    const [newTodo, setNewTodo] = useState({
        title: '',
        description: '',
        status: 'TO DO',
        startAt: Date.now
    })

    const handleBackdropClose = (e) => {
        if (e.target.id === 'addModal'){
            setShowAddModal(false)
            resetNewTodoData();
        }
    }

    const handleClose = () => {
        setShowAddModal(false)
        resetNewTodoData()
    }

    const handleFormChange = e => {
        const {name, value} = e.target
        const newForm = {...newTodo, [name]: value}
        setNewTodo(newForm)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTodo(newTodo);
        resetNewTodoData()
    }

    const resetNewTodoData = () => {
        setNewTodo({
            title: '',
            description: '',
            status: 'TO DO',
            startAt: Date.now
        })
        setShowAddModal(false)
    }

    const {title, description, status} = newTodo
  return (
    <div>
        <button onClick={() => setShowAddModal(true)} className='w-12 h-12 fixed bottom-8 right-4 sm:right-8 lg:w-16 lg:h-16 md:right-12 hover:opacity-90'>
            <img src={AddIcon} alt="" />
        </button>
        {( showAddModal && <div>
            <div id='addModal' onClick={handleBackdropClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex justify-center items-center'>
                <div className='bg-white w-10/12 max-w-sm h-[30rem] p-2 relative rounded-lg'>
                    <button onClick={handleClose} className='absolute right-3 top-3 rounded-md bg-red-400 hover:bg-red-500 text-white uppercase px-2 py-1.5'>close</button>
                    <div className='px-3 py-10'>
                        <form onSubmit={handleSubmit}>
                            <h2 className='text-3xl font-bold text-purple-500'>Create A Todo</h2>
                            <div className='my-4'>
                                <label className='block italic font-semibold text-sky-700' htmlFor="title">Title</label>
                                <input onChange={handleFormChange} className='border-2 rounded-md' type="text" name='title' id='title' value={title} required />
                            </div>
                            <div className='my-4'>
                                <label className='block italic font-semibold text-sky-700' htmlFor="description">Description</label>
                                <textarea onChange={handleFormChange} className='border-2 rounded-md' rows="5" cols="35" name='description' id='description' value={description} required />
                            </div>
                            <div className='my-4'>
                                <label className=' italic font-semibold text-sky-700' htmlFor='status'>Status : </label>
                                <select onChange={handleFormChange} className='border-2 rounded-md' name='status' id='status' value={status}>
                                    <option value="TO DO">TO DO</option>
                                    <option value="DOING">DOING</option>
                                </select>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <input className='border-2 bg-indigo-500 hover:bg-indigo-700 font-semibold text-white rounded-lg px-6 py-2 cursor-pointer uppercase' type="submit" value="Create" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> )}
    </div>
  )
}

export default AddTodo