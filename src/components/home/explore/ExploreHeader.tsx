"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export const ExploreData = [
    {
        id: 1,
        iconpink: "/svg/foodpink.svg",
        iconwhite: "/svg/foodwhite.svg",
        title: "Foodie",
        alt: "foodie"
    },
    {
        id: 2,
        iconpink: "/svg/hotloverpink.svg",
        iconwhite: "/svg/hotloverwhite.svg",
        title: "Hot Lover",
        alt: "Hot Lover"
    },
    {
        id: 3,
        iconpink: "/svg/romanticpink.svg",
        iconwhite: "/svg/romanticwhite.svg",
        title: "Romantic",
        alt: "Romantic"
    },
    {
        id: 4,
        iconpink: "/svg/friendshippink.svg",
        iconwhite: "/svg/friendshipwhite.svg",
        title: "Freindship",
        alt: "Freindship"
    },
    {
        id: 5,
        iconpink: "/svg/animalpink.svg",
        iconwhite: "/svg/animalwhite.svg",
        title: "Animal Cruelty Free",
        alt: "Animal Cruelty Free"
    }
]

const ExploreHeader = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const handleClick = (index: any) => {
        setActiveIndex(index)
    }

    return (
        <>
            {/* <Image src="/svg/border.svg" width={10} height={10} alt="Previous" /> */}
            <div className='mt-[96px] flex flex-col items-center gap-[56px]'>
                <span className='font-bold  text-[36px] leading-[53px]'>Explore By Tags</span>
                <div className='flex gap-[25px] items-center'>
                    {
                        ExploreData.map((data, index) => {
                            return (
                                <div key={index} onClick={() => { handleClick(index as any) }} className={`${activeIndex === index ? "bg-[#FF0080]" : "bg-white border border-[#ff0080]"}  duration-[600ms] cursor-pointer rounded-[45px] px-[40px] py-[16px] flex items-center gap-[10px]`}>
                                    <div><Image src={activeIndex === index ? data.iconwhite : data.iconpink} width={24} height={24} alt={data.alt} className='text-white' /></div>
                                    <span className={`${activeIndex === index ? "text-white" : "text-[#FF0080]"} font-semibold text-[16px] leading-[19px]`}>{data.title}</span>
                                </div>
                            )
                        })
                    }
                    <div className='cursor-pointer' onClick={() => {
                        if (activeIndex < ExploreData.length - 1) { setActiveIndex(activeIndex + 1) }
                        else { setActiveIndex(0) }
                    }}>
                        <Image src="/svg/explorenexticon.svg" width={40} height={40} alt="right arrow" className='' />
                    </div>
                </div>
            </div >
        </>
    )
}
export default ExploreHeader;