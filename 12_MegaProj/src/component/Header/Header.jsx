import React from 'react'
import {Container,  LogoutBtn, Logo} from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// useNavigate and useNavigation alag hota



function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
// production grade me obj banate hai, taki ek aur value add kroadd hojayegi


  return (
    <header className='py-3 shadow bg-gray-500'>
      
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                // is navigate ko bas ek url dedo ki kaha leke jau

                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li> 
            ) : null
            )}

            {/* ye authStatus true hoga to niche ka code dikhega vrna nhi dikhega */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
// rfc use
// logout dikhana conditional rendering krenge check krenege

// first refer ./LogoutBtn.jsx