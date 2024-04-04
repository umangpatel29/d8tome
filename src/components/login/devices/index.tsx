import Image from 'next/image'
import React from 'react'

const Devices = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex gap-3 w-[45%] mx-auto flex-col'>
                <h1 className='text-center font-semibold text-[40px] leading-[60px]'>Watch in all<span className='text-primary'> your devices</span></h1>
                <p className='text-center font-medium text-4 leading-6 text-[#8B8B8B]'>Sync movies and shows across your phone, Laptop and computer and easily access your favourites anywhere in the world</p>
            </div>

            <div className='mt-[60px]'>
                <div className='mx-auto w-[1100px] overflow-hidden md:pl-28'>
                    <Image src='/svg/devices.svg' alt='' width={100} height={100} className='object-cover w-full' />
                </div>

            </div>
        </div>
    )
}

export default Devices
