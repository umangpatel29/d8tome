import Footer from '@/components/common/footer'
import React from 'react'
import HomePage from '@/components/home'
import Navbar from '@/components/common/navbar'

const HomePages = () => {
    return (
        <div>
            <Navbar/>
            <HomePage />
            <Footer />
        </div>
    )
}

export default HomePages
