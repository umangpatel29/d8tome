"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type HeroVideoProps = {
    forModal?: boolean;
    setForModal: (quantity: boolean) => void;
    setIsWelcome: (quantity: boolean) => void;
};

const PricePlan = ({ setForModal, forModal, setIsWelcome }: HeroVideoProps) => {
    const [monthly, setMonthly] = useState(true)
    const [yearly, setYearly] = useState(false)


    return (
        <>
            {forModal && <div>
                <div className='bg-black flex items-center justify-center w-full h-full pt-20 relative z-[9999]'>
                    <div className=' relative  bg-black my-5'>
                        <div className='flex flex-col gap-10 items-center'>
                            <div className='w-full text-center flex flex-col gap-5'>
                                <span className='font-inter font-bold text-[40px] leading-[48px] text-white'>Simple, Transparent Pricing</span>
                                <span className='font-inter font-medium text-[20px] leading-6 text-white'>No contracts. No surprise fees.</span>
                            </div>
                            <div className='w-[220px] bg-white rounded-[32px] flex'>
                                <button onClick={() => { setMonthly(true); setYearly(false) }} className={`${monthly ? "bg-[#FF407D] text-white" : " text-[#848199]"} duration-300 font-inter w-[111px] font-bold  text-[11px] rounded-[32px] leading-3 tracking-[0.83px] px-7 py-4`}>MONTHLY</button>
                                <button onClick={() => { setYearly(true); setMonthly(false) }} className={`${yearly ? "bg-[#FF407D] text-white" : " text-[#848199]"} duration-300 font-inter w-[111px] font-bold text-[11px] rounded-[32px] leading-3 tracking-[0.83px] px-7 py-4 `}>YEARLY</button>
                            </div>
                            <div className='flex w-[904px] h-[450px] mt-16 justify-between py-10 px-10 bg-white rounded-[26px]'>
                                <div className='w-[232px] flex flex-col gap-5'>
                                    <p className='font-inter font-bold text-[36px] leading-[46px] text-[#231D4F]'>$0<span className='font-inter font-semibold text-[17px] leading-5 text-[#848199]'>/month</span></p>
                                    <div className='flex flex-col gap-[14px]'>
                                        <span className='font-inter font-medium text-[28px] leading-[33px] text-[#231D4F]'>Free</span>
                                        <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Lorem ipsum dolor sit amet consectetur. Est sed malesuada</span>
                                    </div>
                                    <div className='flex flex-col gap-[10px]'>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>All limited links</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Own analytics platform</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Chat support</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Optimize hashtags</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Unlimited users</span>
                                        </div>
                                    </div>
                                    <button className='bg-[#fff3fb] rounded-[4px] py-[13px] w-[207px] font-inter font-medium text-[15px] leading-[18px] text-[#F496D1]'>Choose plan</button>
                                </div>
                                <div className='w-[292px] h-fit drop-shadow-3xl rounded-[26px] shadow-xl translate-y-[-100px]  bg-[#FF407D] top-[-51px] left-[300px] px-[30px] pt-[20px] pb-[43px]'>
                                    <div className='flex justify-end'>
                                        <span className='w-fit text-[#FF407D] cursor-pointer py-2 px-4 rounded-[26px] bg-white font-inter font-semibold text-[10px] leading-3 tracking-[0.83px]'>MOST POPULAR</span>
                                    </div>
                                    <div className='w-[232px] flex flex-col gap-5'>
                                        <p className='font-inter font-bold text-[36px] leading-[46px] text-white'>$100<span className='font-inter font-semibold text-[17px] leading-5 text-white'>/month</span></p>
                                        <div className='flex flex-col gap-[14px]'>
                                            <span className='font-inter font-medium text-[28px] leading-[33px] text-white'>Basic</span>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-white'>Lorem ipsum dolor sit amet consectetur. Faucibus mauris</span>
                                        </div>
                                        <div className='flex flex-col gap-[10px]'>
                                            <div className='flex gap-[10px]'>
                                                <div className='bg-[#ff75a3] p-[5px] rounded-full'>
                                                    <Image
                                                        src="/svg/pathwhite.svg"
                                                        alt="close"
                                                        width={11}
                                                        height={9}
                                                        className=""
                                                    />
                                                </div>
                                                <span className='font-inter font-medium text-[15px] leading-[18px] text-white'>Full access to video</span>
                                            </div>
                                            <div className='flex gap-[10px]'>
                                                <div className='bg-[#ff75a3] p-[5px] rounded-full'>
                                                    <Image
                                                        src="/svg/pathwhite.svg"
                                                        alt="close"
                                                        width={11}
                                                        height={9}
                                                        className=""
                                                    />
                                                </div>
                                                <span className='font-inter font-medium text-[15px] leading-[18px] text-white'>Own analytics platform</span>
                                            </div>
                                            <div className='flex gap-[10px]'>
                                                <div className='bg-[#ff75a3] p-[5px] rounded-full'>
                                                    <Image
                                                        src="/svg/pathwhite.svg"
                                                        alt="close"
                                                        width={11}
                                                        height={9}
                                                        className=""
                                                    />
                                                </div>
                                                <span className='font-inter font-medium text-[15px] leading-[18px] text-white'>Chat support</span>
                                            </div>
                                            <div className='flex gap-[10px]'>
                                                <div className='bg-[#ff75a3] p-[5px] rounded-full'>
                                                    <Image
                                                        src="/svg/pathwhite.svg"
                                                        alt="close"
                                                        width={11}
                                                        height={9}
                                                        className=""
                                                    />
                                                </div>
                                                <span className='font-inter font-medium text-[15px] leading-[18px] text-white'>Optimize hashtags</span>
                                            </div>
                                            <div className='flex gap-[10px]'>
                                                <div className='bg-[#ff75a3] p-[5px] rounded-full'>
                                                    <Image
                                                        src="/svg/pathwhite.svg"
                                                        alt="close"
                                                        width={11}
                                                        height={9}
                                                        className=""
                                                    />
                                                </div>
                                                <span className='font-inter font-medium text-[15px] leading-[18px] text-white'>Unlimited users</span>
                                            </div>
                                        </div>
                                        <button className='bg-white rounded-[4px] py-[13px] w-[207px] font-inter font-medium text-[15px] leading-[18px] text-[#FF407D]'>Choose plan</button>
                                    </div>
                                </div>
                                <div className='w-[232px] flex flex-col gap-5'>
                                    <p className='font-inter font-bold text-[36px] leading-[46px] text-[#231D4F]'>$200<span className='font-inter font-semibold text-[17px] leading-5 text-[#848199]'>/month</span></p>
                                    <div className='flex flex-col gap-[14px]'>
                                        <span className='font-inter font-medium text-[28px] leading-[33px] text-[#231D4F]'>Exclusive</span>
                                        <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Lorem ipsum dolor sit amet consectetur. Fermentum lacus</span>
                                    </div>
                                    <div className='flex flex-col gap-[10px]'>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Full access to video</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Own analytics platform</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Chat support</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Optimize hashtags</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='bg-[#ebe9ff] p-[5px] rounded-full'>
                                                <Image
                                                    src="/svg/path.svg"
                                                    alt="close"
                                                    width={11}
                                                    height={9}
                                                    className=""
                                                />
                                            </div>
                                            <span className='font-inter font-medium text-[15px] leading-[18px] text-[#848199]'>Unlimited users</span>
                                        </div>
                                    </div>
                                    <button className='bg-[#fff3fb] rounded-[4px] py-[13px] w-[207px] font-inter font-medium text-[15px] leading-[18px] text-[#F496D1]'>Choose plan</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => { setForModal(false); setIsWelcome(true); console.log(forModal); }} className='cursor-pointer absolute top-0 right-0'>
                            <Image
                                src="/svg/priceplanclose.svg"
                                alt="close"
                                width={38}
                                height={38}
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default PricePlan
