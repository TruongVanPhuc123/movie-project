import react from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import LoadingScreen from "../components/LoadingScreen"

export default function AuthRequired({ children }) {
    const token = window.localStorage.getItem("token")
    const { isAuthenticated, isInitialized } = useAuth()

    // if (!isInitialized) {
    //     return <LoadingScreen />;
    // }
    if (token === null) {
        return <Navigate to='/login' />
    }
    return children
}
