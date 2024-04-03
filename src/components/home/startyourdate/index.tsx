import Image from 'next/image'
import React from 'react'

const StartYourDate = () => {
  return (
    <div className='relative'>
      <div className='h-[700px] w-full mb-10 bg-cover'
        style={{ backgroundImage: "url(/images/chat-heading.png)", backgroundPosition: "center", }} >
        <div className='flex justify-center h-full items-center p-3'>
          <div className='text-center'>
            <h1 className='font-bold leading-5 text-5 text-[#CEBDFF]'>Start building Your Date</h1>
            <h1 className='text-white text-[56px] leading-[61px] mt-5' style={{ fontWeight: 800 }}>D8TeMe App</h1>
            <div className='text-white md:w-[35%] w-full mt-7 mx-auto text-center font-medium text-[18px] leading-[28.8px]'>
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              Risus elit et fringilla habitant ut facilisi.
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              Risus elit et fringilla habitant ut facilisi.
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              Risus elit et fringilla habitant ut facilisi.
            </div>
            <button className='text-primary font-medium mt-8 leading-[24px] text-4 px-7 py-3 bg-white rounded-sm'>Upgrade Now</button>
          </div>
        </div>
      </div>
      <div className='absolute hidden md:flex bottom-0 z-10 left-44'>
        <Image src='/svg/roseboy.svg' alt='' width={200} height={200} />
      </div>
      <div className='absolute top-6 hidden md:flex h-full left-0'>
        <Image src='/svg/rosegirl.svg' alt='' width={700} height={700} />
      </div>
      <div className='absolute top-0 right-0 h-full hidden md:flex overflow-hidden'>
        <Image src='/svg/startdateiphones.svg' alt='' width={700} height={700} />
      </div>
    </div>
  )
}

export default StartYourDate
