export const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/api/v1' : 'https://todo-app-scul0405.herokuapp.com/api/v1'
export const LOCAL_STORAGE_TOKEN_NAME = 'todo-jwt'
export const TODOS_LOADED_SUCCESS = 'TODOS_LOADED_SUCCESS'
export const TODOS_LOADED_FAIL = 'TODOS_LOADED_FAIL'
export const CREATE_TODO = 'CREATE_A_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const FIND_UPDATE_TODO = 'FIND_UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const SORT_TODOS = 'SORT_TODOS' 