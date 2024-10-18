import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication=true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => { 
      // user ne kuch nhi bheja to default true
      // true && false !== true
        if (authentication && authStatus !== authentication){
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
          navigate('/')
          // if(false && true !== true)
        }

        // TOOO EASY
        // if(authStatus === true){
        //   navigate('/')
        // }elseif(authStatus === false){
        //   navigate('/login')
        // }
        setLoader(false)
      },[authStatus, navigate, authentication])
      // isme kabhi bhi change ho to run karna
  return loader ? <h1>Loading...</h1>: <>{children}</>
}

// 6:27:19
// Mechanism to protect pages and routes from unauthorized users.
// Used when router is setup
// Head to RTE