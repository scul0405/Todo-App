import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import setAuthToken from '../utils/setAuthToken'
import { useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer,{
        authLoading: true,
        isAuthenticated: false,
        currentUser: null
    })
    // Check token is exist
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME])
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])

        try {
            const response = await axios.get(`${apiUrl}/users`)
            if (response.data.status === 'success')
                dispatch({
                    type: 'SET_AUTH',
                    payload: { isAuthenticated: true, currentUser: response.data.user}
                })
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch({
                type: 'SET_AUTH',
                payload: {isAuthenticated: false, currentUser: null}
            })
        }
    }

    // Each time reload -> check user
    useEffect(() => {
        loadUser()
    },[])

    // Login user
    const loginUser = async loginForm => {
        try{
            const response = await axios.post(`${apiUrl}/users/login`,loginForm)
            if (response.data.status === 'success')
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token)

            await loadUser() // to set isAuthenticated to true -> get access to dashboard
            return response.data
        }
        catch (err){
            // error we can handle
            if (err.response.data)
                return err.response.data
            else // new error
                return {status: 'failed', message: err.message}
        }
    }

    // register user
    const registerUser = async (registerForm) => {
        try {
            const response = await axios.post(`${apiUrl}/users/signup`, registerForm)
            if (response.data.status === 'success')
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token)
            await loadUser()
            return response.data
        }
        catch(err) {
            if (err.response.data)
                return err.response.data
            else
                return {status: 'failed', message: err.message}
        }
    } 

    //Context data
    const authContextData = {loginUser, registerUser, authState}

    return (
        <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>
    )
}

