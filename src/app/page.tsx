"use client"
import React, { useState } from 'react'
import HomePage from '@/components/home'
import Footer from '@/components/common/footer'
import CreateAccountSteps from '@/components/createaccount'
import LoginPage from './login/page'
const Home = () => {

  return (
    <>
      <LoginPage />
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
