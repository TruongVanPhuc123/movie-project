import { createContext, useEffect, useReducer } from "react";
import apiService from "../app/apiService";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

const initialState = {
    isInitialized: false,
    isAuthenticated: false,
    user: window.localStorage.getItem('email'),
    token: window.localStorage.getItem('token'),
}

const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGOUT = "LOGOUT"
const ISINITIALIZED = "ISINITIALIZED"

const AuthContext = createContext({ ...initialState })

const reducer = (state, action) => {
    const { type } = action
    console.log(state)
    switch (type) {
        case LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.payload.email, token: window.localStorage.setItem('token', action.payload.token) }
        case LOGOUT:
            return { ...state, isAuthenticated: false, user: null }
        case ISINITIALIZED:
            return { ...state, isInitialized: true }

        default:
            return state;
    }
}


function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)


    const login = async ({ email, password }, callback) => {
        window.localStorage.setItem("email", email)

        const response = await apiService.get('/authentication/token/new', options)
        const { request_token } = response

        dispatch({ type: LOGIN_SUCCESS, payload: { email: email, token: request_token } })
        dispatch({ type: ISINITIALIZED })
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        dispatch({ type: LOGOUT })

    }

    return (
        <AuthContext.Provider value={{ ...state, login, logout, options: options }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }