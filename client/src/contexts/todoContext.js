import {TODOS_LOADED_SUCCESS,TODOS_LOADED_FAIL,CREATE_TODO,UPDATE_TODO,DELETE_TODO, SORT_TODOS} from '../contexts/constants'
import { createContext, useState,useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";
import axios from "axios";
import { apiUrl } from "./constants";

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todoState, dispatch] = useReducer(todoReducer,{
        todosLoading: true,
        todos: []
    })

    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

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
            console.log(response)
        }
        catch(error){
            throw new Error(error.message)
        }
    }

    const todoContextData = {getTodos, todoState, createTodo, showAddModal, setShowAddModal, showUpdateModal, setShowUpdateModal}
    return (
        <TodoContext.Provider value={todoContextData}>{children}</TodoContext.Provider>
    )
}