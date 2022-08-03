import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer,{
        authLoading: true,
        isAuthenticated: false,
        currentUser: null
    })

    const loginUser = async loginForm => {
        try{
            const response = await axios.post(`${apiUrl}/users/login`,loginForm)
            if (response.data.status === 'success')
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token)
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

    //Context data
    const authContextData = {loginUser}

    return (
        <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>
    )
}

