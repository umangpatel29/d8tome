"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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


    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    console.log("🚀 ~ ExploreHeader ~ isBeginning:", isBeginning, isEnd)

    const handleInit = (swiper: {
        isBeginning: boolean | ((prevState: boolean) => boolean);
        isEnd: boolean | ((prevState: boolean) => boolean);
    }) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleSlideChange = (swiper: {
        isBeginning: boolean | ((prevState: boolean) => boolean);
        isEnd: boolean | ((prevState: boolean) => boolean);
    }) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <>
            <div className=''>
                <div className='flex justify-center items-center'>
                    <span className='font-bold text-[36px] leading-[53px]'>Explore By Tags</span>
                </div>
                <div className='flex gap-2 items-center md:gap-4 md:mt-20 mt-5'>
                    <div className='prevheader cursor-pointer h-[35px] w-[35px] md:h-[55px] md:w-[55px] overflow-hidden'>
                        <Image src="/svg/explorenexticon.svg" className='transform rotate-180 h-full w-full' width={30} height={30} alt="left arrow" />
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        className="w-[73%] mt-2 md:mt-0 md:w-full"
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".prevheader",
                            nextEl: ".nextheader",
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.5,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 3.5,
                                spaceBetween: 25
                            },
                            1024: {
                                slidesPerView: 4.5,
                                spaceBetween: 30
                            },
                        }}
                        onInit={handleInit}
                        onSlideChange={handleSlideChange}
                    >
                        {ExploreData.map((data, index) => (
                            <SwiperSlide key={data.id}>
                                <div
                                    onClick={() => handleClick(index)}
                                    className={`${activeIndex === index ? 'bg-[#FF0080]' : 'bg-white border border-[#ff0080]'
                                        } duration-[600ms] cursor-pointer rounded-[45px] px-[40px] py-[16px] flex items-center gap-[10px]`}
                                >
                                    <div>
                                        <Image
                                            src={activeIndex === index ? data.iconwhite : data.iconpink}
                                            width={24}
                                            height={24}
                                            alt={data.alt}
                                            className='text-white'
                                        />
                                    </div>
                                    <span
                                        className={`${activeIndex === index ? 'text-white' : 'text-[#FF0080]'
                                            } font-semibold text-[16px] leading-[19px]`}
                                    >
                                        {data.title}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='nextheader cursor-pointer h-[35px] w-[35px] md:h-[55px] md:w-[55px] overflow-hidden'>
                        <Image src="/svg/explorenexticon.svg" className='h-full w-full' width={30} height={30} alt="left arrow" />
                    </div>
                </div>

            </div>
        </>
    )
}
export default ExploreHeader;