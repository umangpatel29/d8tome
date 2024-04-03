"use client"
import React, { useState } from 'react'
import HomePage from '@/components/home'
import CreateAccountSteps from '@/components/createaccount/steps'

const Home = () => {
  const [isHomePage, setIsHomePage] = useState<boolean>(false)
  return (
    <>
      {
        isHomePage ?
          <HomePage /> : <CreateAccountSteps setIsHomePage={() => setIsHomePage(true)} />
      }
    </>
  )
}

export default Home
