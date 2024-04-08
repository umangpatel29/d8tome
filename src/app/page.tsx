"use client"
import React, { useEffect, useState } from 'react'
import HomePage from '@/components/home'
import Footer from '@/components/common/footer'
import CreateAccountSteps from '@/components/createaccount'
import LoginPage from './login/page'
import { useUser } from '@/context/useContext'
import Navbar from '@/components/common/navbar'
const Home = () => {

  const { token, isSpinner, setIsSpinner, isLogin, setIsLogin } = useUser()
  console.log(token, "token")

  useEffect(()=>{
    setIsLogin(true)
  },[])

  return (
    <>
      {
        (isLogin && token) ?
          <div>
            <Navbar />
            <HomePage />
            <Footer />
          </div> :
          <LoginPage />
      }
      {/* <CreateAccountSteps /> */}
      {/* {
        isHomePage ?
          <>
            <HomePage />
            <Footer />
          </>
          : <CreateAccountSteps />
      } */}
    </>
  )
}

export default Home
