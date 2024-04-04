import React from 'react'

interface StepOneProps {
    handleStepClick: (step: number) => void;
}

const StepFour = ({ handleStepClick }: StepOneProps) => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-[24px] leading-[35px] text-center md:text-start'>Contact details</h1>
                <p className='font-normal text-[18px] leading-[30px] text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisc.</p>
            </div>
            <div className='w-full flex flex-col gap-7 mt-7'>
                <div>
                    <p className='text-[18px] font-semibold leading-[20px] text-[#3A3A3A]'>Passions</p>
                    <div className='flex items-center gap-5 justify-between mt-2'>
                        <div className='border border-[#CDCDCD] text-[#CDCDCD] text-[18px] px-5 py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer'>
                            + Add Passions </div>
                    </div>
                </div>
                <div>
                    <p className='text-[18px] font-semibold leading-[20px] text-[#3A3A3A]'>Sexual Orientation</p>
                    <div className='flex items-center gap-5 justify-between mt-2'>
                        <div className='border border-[#CDCDCD] text-[#CDCDCD] text-[18px] px-5 py-4 rounded-full font-medium leading-[20px]  text-center cursor-pointer'>
                            + Add Sexual orientation</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepFour
