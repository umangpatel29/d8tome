"use client"
import React, { useState } from 'react'
import HomePage from '@/components/home'
import Footer from '@/components/common/footer'
import CreateAccountSteps from '@/components/createaccount'
import LoginPage from './login/page'

const Home = () => {

  const [isHomePage, setIsHomePage] = useState<boolean>(false)
  return (
    <>
      <LoginPage />
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
