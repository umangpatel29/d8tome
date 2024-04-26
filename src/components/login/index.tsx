import React from 'react'
import NavbarLogin from '../common/navbar/navbarlogin';
import Devices from './devices';
import CustomerSays from './customersays';
import Footer from '../common/footer';
import Faq from './FAQ';
import Heading from './heading/Heading';

const Login = () => {
    return (
        <div className='px-['>
            <div>
                <NavbarLogin />
            </div>
            <div className='mt-20'>
                <Devices />
            </div>
            <div className='mt-20'>
                <CustomerSays />
            </div>
            <div className='mt-20'>
                <Faq />
            </div>
            <div className='mt-20'>
                <Footer />
            </div>
        </div>
    )
}

export default Login;
