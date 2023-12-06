import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { AuthContext } from '../context/auth'

export const ProtectedRoute = ({ children }) => {
const {isLoggedIn, user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            return navigate('/')
        }
    }, [isLoggedIn])

    return children ? children : <Outlet />
}
