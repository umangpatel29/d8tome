import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='container mx-auto p-3 mb-5'>
            <div className='grid grid-cols-2 gap-y-7 md:gap-0 md:grid-cols-6'>
                <div className='flex flex-col gap-3'>
                    <div className='text-black uppercase text-4 font-medium leading-[17px] text-center md:text-start'>Categories</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>User Interface</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>User Experience</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Digital Media</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Lifestyle</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Programming</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Animation</div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-black uppercase text-4 font-medium leading-[17px] text-center md:text-start'>Product</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Pricing</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Overview</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Browse</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Accessibility</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Five</div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-black uppercase text-4 font-medium leading-[17px] text-center md:text-start'>Solutions</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Brainstorming</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Ideation</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Wireframing</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Research</div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-black uppercase text-4 font-medium leading-[17px] text-center md:text-start'>Resources</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Help Center</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Blog</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Tutorials</div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-black uppercase text-4 font-medium leading-[17px] text-center md:text-start'>Support</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Contact Us</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Developers</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Documentation</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Integrations</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Reports</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Webinar</div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-black uppercase text-4 font-medium leading-[17px] text-center md:text-start'>Company</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>About</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Press</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Events</div>
                    <div className='text-[#475569] text-4 font-normal leading-[22px] text-center md:text-start'>Careers</div>
                </div>

            </div>

            <div className='flex justify-between items-center mt-16'>
                <div className='text-4 leading-[22px font-normal'>@ 2024 D8TeMe. All rights reserved</div>
                <div className='flex gap-32 items-center'>
                    <div className='flex gap-5 '>
                        <div>Terms</div>
                        <div>Privacy</div>
                        <div>Contact</div>
                    </div>
                    <div className='flex gap-4'>
                        <Image src='/svg/youtube.svg' alt='' width={20} height={20} />
                        <Image src='/svg/instagram.svg' alt='' width={20} height={20} />
                        <Image src='/svg/facebook.svg' alt='' width={10} height={10} />
                        <Image src='/svg/linkedin.svg' alt='' width={20} height={20} />
                        <Image src='/svg/twitter.svg' alt='' width={20} height={20} />
                    </div>
                    <div className='flex gap-2'>
                        <Image src='/svg/applestore.svg' alt='' width={120} height={100} />
                        <Image src='/svg/playstore.svg' alt='' width={120} height={120} />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
