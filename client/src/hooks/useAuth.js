import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify"


const baseUrl = process.env.BASE_URL;
export default function useAuth() {



    const navigate = useNavigate()
    const User = JSON.parse(localStorage.getItem('User')) || null
    const [user, setUser] = useState(User)
    const auth = localStorage.getItem('isAuth') || false
    const [isAuth, setIsAuth] = useState(auth)
    const [routeTimeout, setRouteTimeout] = useState(null)

    const signup = async data => {
        await axios.post(`${baseUrl}auth/signup`, data)
            .then(res => {
                const { email, password } = res.data
                const user = { email, password, user: true, company: false }
                toast.success(res.data.mymessage)
                clearTimeout(routeTimeout)
                setRouteTimeout(setTimeout(() => navigate('/login', { state: user }), 1500))
            }).catch(err => {
                toast.error(err.response.data.mymessage)
                clearTimeout(routeTimeout)
                setRouteTimeout(setTimeout(() => navigate('/login', { state: { user: true } }), 1000))

            })
    }

    const login = async data => {
        await axios.post(`${baseUrl}auth/login`, data)
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.mymessage)
                } else {
                    const User = { name: res.data.name, email: res.data.email }
                    toast.success(res.data.mymessage)
                    setIsAuth(true)
                    setUser(res.data)
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('User', JSON.stringify(User))
                    navigate('/', { state: { isAuth: true, user } })
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    return { user, isAuth, signup, login,baseUrl }
}
