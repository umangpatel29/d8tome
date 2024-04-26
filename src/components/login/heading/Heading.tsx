import NavbarLogin from '@/components/common/navbar/navbarlogin'
import Image from 'next/image'
import React from 'react'

const Heading = () => {
    return (
        <div>

            <div className='w-full overflow-hidden h-[768px] relative flex justify-center items-center'>
                <Image
                    src='/images/heading.png'
                    alt=''
                    fill
                    className='object-cover'
                />
                <div className='w-screen h-[768px] absolute bg-[#0000009F]'>

                </div>
                <div className='absolute w-full top-0 z-[9999]'>
                    <NavbarLogin />
                </div>
                <div className='flex flex-col gap-9 absolute items-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <span className='font-semibold text-white text-[48px] max-w-[650px]'>Dating Application Concept</span>
                        <span className='font-normal text-center text-[20px] text-white max-w-[470px]'>D8teme is a social dating app that let’s you find & interact with people nearby with similar interests using text, voice messages & fun emojis</span>
                    </div>
                    <button className='rounded-[6px] w-fit bg-gradient-to-r from-[#E8012B] to-[#F6794F] text-white text-[16x] font-medium px-9 py-[14px]'>Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default Heading
