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
    user: window.localStorage.getItem('user'),
    email: window.localStorage.getItem('email'),
    password: window.localStorage.getItem('password'),
    token: window.localStorage.getItem('token'),
    error: null,
}

const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILED = "LOGIN_FAILED"
const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const LOGOUT = "LOGOUT"
const ISINITIALIZED = "ISINITIALIZED"

const AuthContext = createContext({ ...initialState })

const reducer = (state, action) => {
    const { type } = action
    switch (type) {
        case LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.payload.email, token: window.localStorage.setItem('token', action.payload.token) }
        case LOGIN_FAILED:
            return {
                ...state, isAuthenticated: false, error: action.payload.error, token: window.localStorage.removeItem('token'),
            }
        case REGISTER_SUCCESS:
            return {
                ...state, user: action.payload.user,
                email: action.payload.email,
                password: action.payload.password,
                token: window.localStorage.setItem('token', action.payload.token)
            }
        case LOGOUT:
            return { ...state, isAuthenticated: false }
        case ISINITIALIZED:
            return { ...state, isInitialized: true, isAuthenticated: true }

        default:
            return state;
    }
}


function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const AuthToken = () => {
            if (token) {
                dispatch({ type: ISINITIALIZED })
            }
        }
        AuthToken();
    }, [])


    const login = async ({ email, password }) => {
        const emailLc = window.localStorage.getItem("email")
        const passwordLc = window.localStorage.getItem("password")
        if (email && password) {

            if (email !== emailLc || password !== passwordLc) {
                dispatch({ type: LOGIN_FAILED, payload: { error: `Invalid email ${email} and password ${password}` } })
            } else {
                const response = await apiService.get('/authentication/token/new', options)
                const { request_token } = response

                console.log(request_token)
                dispatch({ type: LOGIN_SUCCESS, payload: { email: email, token: request_token } })
            }
        } else {
            return
        }
    }

    const register = async ({ user, email, password }, callback) => {
        window.localStorage.setItem("email", email)
        window.localStorage.setItem("password", password)
        window.localStorage.setItem("user", user)

        const response = await apiService.get('/authentication/token/new', options)
        const { request_token } = response

        dispatch({ type: REGISTER_SUCCESS, payload: { user: user, email: email, password: password, token: request_token } })
        callback()
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('email')
        window.localStorage.removeItem('password')
        window.localStorage.removeItem('user')
        dispatch({ type: LOGOUT })
    }

    return (
        <AuthContext.Provider value={{ ...state, login, logout, register, options: options }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }