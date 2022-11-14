import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { DOMAIN } from '../utils/domain';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)
    let [me, setMe] = useState(null)
    
    const [inputNav, setInputNav] = useState('')

    const navigate = useNavigate();

    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch(DOMAIN + '/api/token/tokens/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate(`/profile/${user.username}`)
        }else{
            alert('Something went wrong!')
        }
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login/')
    }


    let updateToken = async ()=> {

        let response = await fetch(DOMAIN + '/api/token/tokens/refresh/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }
    
    let fetchOwnProfile = async() => {
        try {
            const response = await fetch(`${DOMAIN}/api/profile/me/`, {
              method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Authorization' : `Bearer ${authTokens.access}`,
              },
            });
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            setMe(result);
          } catch (err) {
            console.log(err.message);
          }
    }

    let contextData = {
        me: me,
        user:user,
        authTokens:authTokens,
        inputNav: inputNav,
        setInputNav:setInputNav,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

        if(loading){
            updateToken()
        }

        if(authTokens){
            fetchOwnProfile();
        }

        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}