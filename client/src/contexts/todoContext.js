import {TODOS_LOADED_SUCCESS,TODOS_LOADED_FAIL,CREATE_TODO,UPDATE_TODO,DELETE_TODO, SORT_TODOS} from '../contexts/constants'
import { createContext, useContext,useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";
import axios from "axios";
import { apiUrl } from "./constants";

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todoState, dispatch] = useReducer(todoReducer,{
        todosLoading: true,
        todos: []
    })

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

    const todoContextData = {getTodos, todoState}
    return (
        <TodoContext.Provider value={todoContextData}>{children}</TodoContext.Provider>
    )
}