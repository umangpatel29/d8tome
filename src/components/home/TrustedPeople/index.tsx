import React from 'react'
import TrustedSwiper from './trustedSwiper'
import Image from 'next/image'

const TrustedPeople = () => {
    return (
        <div className='relative pb-16 md:mb-20 mb-5 mt-5 md:mt-28 overflow-hidden'>
            <div className='flex justify-center'>
                <h1 className='font-semibold md:text-[30px] leading-[53px] text-[24px] text-center md:text-start'>
                    Over 1000+ People trust us
                </h1>
            </div>
            <div className='md:mt-16 mt-2 p-3 md:p-0'>
                <TrustedSwiper />
            </div>
            <div className="absolute bottom-0 w-full z-0">
                <div style={{ backgroundImage: "linear-gradient(352deg, rgba(248,101,148,1) 0%, rgba(185,201,230,1) 49%, rgba(233,148,157,1) 98%)", height: "280px", width: "100%" }}></div>
            </div>



        </div>
    )
}

export default TrustedPeople
