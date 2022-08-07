import {TODOS_LOADED_SUCCESS,TODOS_LOADED_FAIL,CREATE_TODO,UPDATE_TODO,FIND_UPDATE_TODO,DELETE_TODO, SORT_TODOS} from '../contexts/constants'
import { createContext, useState,useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";
import axios from "axios";
import { apiUrl } from "./constants";

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todoState, dispatch] = useReducer(todoReducer,{
        findTodo: null,
        todosLoading: true,
        todos: []
    })

    // State for modal
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    // Get all todos for each user
    const getTodos = async () => {
        try {
            const response = await axios.get(`${apiUrl}/todos`)
            if (response.data.status === 'success')
                dispatch({type: TODOS_LOADED_SUCCESS, payload: response.data.data.todos})
        }
        catch(error) {
            dispatch({type: TODOS_LOADED_FAIL})
        }
        
    }

    const createTodo = async (createForm) => {
        try {
            const response = await axios.post(`${apiUrl}/todos`,createForm)
            if (response.data.status === 'success')
                dispatch({type: CREATE_TODO, payload: response.data.data.todo})
        }
        catch(error){
            throw new Error(error.message)
        }
    }

    // Find todo will be update
    const findUpdateTodo = (id) => {
        const findTodo = todoState.todos.find(todo => todo._id === id)
        dispatch({type: FIND_UPDATE_TODO, payload: findTodo})
    }

    const updateTodo = async (updateForm, id) => {
        try {
            const response = await axios.patch(`${apiUrl}/todos/${id}`,updateForm)
            if (response.data.status === 'success')
                dispatch({type: UPDATE_TODO, payload: response.data.data.todo})
        }
        catch(error){
            throw new Error(error.message)
        }
    }

    const todoContextData = {getTodos, todoState, createTodo, showAddModal, setShowAddModal, showUpdateModal, setShowUpdateModal, updateTodo, findUpdateTodo}
    return (
        <TodoContext.Provider value={todoContextData}>{children}</TodoContext.Provider>
    )
}