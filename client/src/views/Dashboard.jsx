import React from 'react'
import Card from '../components/card/Card'
import { useContext, useState } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { useEffect } from 'react'
import AddTodo from '../components/addTodo/AddTodo'
import Spinner from '../components/spinner/Spinner'
import UpdateTodo from '../components/updateTodo/UpdateTodo'

const Dashboard = () => {
  // get todos
  const {getTodos, todoState: { todos, todosLoading, findTodo }} = useContext(TodoContext);
  useEffect(() => {
    getTodos()
  }, [todos])

  let body

  if (todosLoading) {
    body = <Spinner />
  }
  else if (todos.length !== 0){
    body = (
      <div className='px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {todos.map(todo => <Card todo={todo} key={todo._id}/>)}
      </div>
    )
  }
  else
    body = (
      <div className='flex flex-col items-center text-2xl text-center sm:text-3xl text-gray-500 font-medium p-6'>
        <p>Welcome to my Todo App</p>
        <p>To using, click the create button at the bottom right corner</p>
      </div>
    )
  

  return (
    <div>
        {body} 
      <AddTodo />
     {findTodo && <UpdateTodo />}
    </div>
  )
}

export default Dashboard