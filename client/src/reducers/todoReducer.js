import {TODOS_LOADED_SUCCESS,TODOS_LOADED_FAIL,CREATE_TODO,UPDATE_TODO, FIND_UPDATE_TODO, DELETE_TODO, SORT_TODOS} from '../contexts/constants'

export const todoReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case TODOS_LOADED_SUCCESS:
            return {...state, todos: payload, todosLoading: false}
        case TODOS_LOADED_FAIL:
            return {...state, todos: [], todosLoading: false}
        case CREATE_TODO:
            return {...state, todos: [...state.todos, payload]}
        case FIND_UPDATE_TODO:
            return {...state, findTodo: payload}
        case UPDATE_TODO:
            {
                const newTodos = state.todos.map(todo => todo._id === payload._id ? payload: todo)
                return {...state, todos: newTodos}
            }
        default:
            return state;
    }
}