"use client"
import React, { useState } from 'react'
import HomePage from '@/components/home'
import CreateAccountSteps from '@/components/createaccount/steps'
import Footer from '@/components/common/footer'

const Home = () => {
  const [isHomePage, setIsHomePage] = useState<boolean>(false)
  return (
    <>
      {
        isHomePage ?
          <>
            <HomePage />
            <Footer />
          </>
          : <CreateAccountSteps setIsHomePage={() => setIsHomePage(true)} />
      }
    </>
  )
}

export default Home
