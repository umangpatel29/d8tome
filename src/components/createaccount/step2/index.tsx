"use client"

import React, { useState } from 'react'

interface StepOneProps {
    handleStepClick: (step: number) => void;
}

const StepTwo = ({ handleStepClick }: StepOneProps) => {

    const [isGender, setIsGender] = useState('men')
    const [showMe, setShowMe] = useState('women')
    const [isShowOnPRofile, setisShowOnPRofile] = useState(false);

    return (
        <div>
            <div>
                <h1 className='font-bold text-[24px] leading-[35px] text-center md:text-start'>Gender</h1>
                <p className='font-normal text-[18px] leading-[30px] text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisc.</p>
            </div>

            <div className='w-full flex flex-col gap-8 mt-7'>
                <div>
                    <p className='text-[18px] font-semibold leading-[20px] text-[#3A3A3A]'>Gender</p>
                    <div className='flex items-center gap-5 justify-between mt-2'>
                        <div onClick={() => setIsGender('men')} className={`${isGender === 'men' ? 'bg-[#ffdbed] text-primary' : ' border border-[#CDCDCD] text-[#CDCDCD]'}  text-[18px] w-full py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer`}>Men</div>
                        <div onClick={() => setIsGender('women')} className={`${isGender === 'women' ? 'bg-[#ffdbed] text-primary' : ' border border-[#CDCDCD] text-[#CDCDCD]'}  text-[18px] w-full py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer`}>Women</div>
                        <div onClick={() => setIsGender('other')} className={`${isGender === 'other' ? 'bg-[#ffdbed] text-primary' : ' border border-[#CDCDCD] text-[#CDCDCD]'}  text-[18px] w-full py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer`}>Other</div>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <input type="checkbox" id='isShowOnPRofile' checked={isShowOnPRofile} name='isShowOnProfile' onChange={() => setisShowOnPRofile(!isShowOnPRofile)} className='cursor-pointer accent-[#ee4198] h-4 w-4' />
                        <label htmlFor="isShowOnPRofile" className='text-[#7F7F7F] cursor-pointer text-[16px] mt-0 md:mt-1 leading-[21px]'>Show my gender on my profile</label>
                    </div>
                </div>
                <div className='mt-2'>
                    <p className='text-[18px] font-semibold leading-[20px] text-[#3A3A3A]'>Show me</p>
                    <div className='flex items-center gap-5 justify-between mt-2'>
                        <div onClick={() => setShowMe('men')} className={`${showMe === 'men' ? 'bg-[#ffdbed] text-primary' : ' border border-[#CDCDCD] text-[#CDCDCD]'}  text-[18px] w-full py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer`}>Men</div>
                        <div onClick={() => setShowMe('women')} className={`${showMe === 'women' ? 'bg-[#ffdbed] text-primary' : ' border border-[#CDCDCD] text-[#CDCDCD]'}  text-[18px] w-full py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer`}>Women</div>
                        <div onClick={() => setShowMe('other')} className={`${showMe === 'other' ? 'bg-[#ffdbed] text-primary' : ' border border-[#CDCDCD] text-[#CDCDCD]'}  text-[18px] w-full py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer`}>Other</div>
                    </div>
                </div>
                <div>
                    <p className='text-[18px] font-semibold leading-[20px] text-[#3A3A3A]'>Looking for</p>
                    <div className='flex items-center gap-5 justify-between mt-2'>
                        <div className='border border-[#CDCDCD] text-[#CDCDCD] text-[18px] px-5 py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer'> + Add Relationship intent</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepTwo
