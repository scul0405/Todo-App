export const authReducer = (state,action) => {
    const {type,payload: {isAuthenticated, currentUser}} = action

    switch(type) {
        case 'SET_AUTH': 
            return {...state, authLoading: false, isAuthenticated, currentUser}

        default: 
            return state
    }
}