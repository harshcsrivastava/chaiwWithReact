import { useState, useEffect } from 'react';
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Header, Footer } from './component';
import {Outlet} from 'react-router-dom'


function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  // Environment variables file loads only one time
  // ise gitignore me dalke, sample file create kr skte

  // if create with create-react-app, then it will be available in process.env and begin with REACT_APP
  // but yaha VITE se create kiya hai, toh VITE_ diya hai and use karne ke liye 
  
  // import.meta.env.VITE_ use karna padega
  // import.meta.env.DB_ => for undefined

  // REACT_APP_ nhi chalega
  // Restart when changin environment  variables

  // =======================================
  // vendor lockin => mtlb ek pe hi depend na ho jaye and switch karna difficult hojaye
  // we will use services like appwrite, firebase, etc

  // ======================================= 

  // Check if userLoggedIn if not kuch nhi dikhanaa
  // kuch database se puchna hai to loading dalenge

  const [loading, setLoading] = useState(true)
// useEffect me false  krdenge
  const dispatch = useDispatch()
  // store me dispatch krdenge data

  // application load ho pucho ki currentUser kon hai
  // finally run hota hi hota hai error ho ya nahi
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  
  //  if (loading) {
  //   return <div>Loading.....</div>
  //  }

  // if NO Loading
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO : <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
