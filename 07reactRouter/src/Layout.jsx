import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Outlet jo  hai Layout ko as a base use kr lega, 
// iske Upar Niche ka same rahega chize niche change hogi

export default function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
