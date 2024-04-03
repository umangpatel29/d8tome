"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from 'next/image';
import ExploreSwiperCard from '../exploreswipercard';
import { CardData } from '@/constant/heroconstant';

const TradingVideos = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

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
        <div className='mt-20'>
            <div>
                <h1 className='font-bold text-[30px] leading-[45px] text-black my-4'>Treading  Videos</h1>
            </div>
            <div>
                <div className='relative top-0 left-0'>
                    {/* {
                        !isBeginning &&
                        <div className='absolute prev flex justify-center items-center top-0 left-0 h-full w-24 cursor-pointer z-20'
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(240, 240, 240, 0.8) 40%, transparent ",
                            }}
                        >
                            <Image
                                src="/svg/swiper-left-arrow-active.svg"
                                alt="not found"
                                width={20}
                                height={20}
                                className="object-contain  mr-9 h-6 w-6"
                            />
                        </div>
                    } */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        className="mySwiper"
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".prevtranding",
                            nextEl: ".nexttranding",
                        }}
                        loop={true}
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
                        {CardData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ExploreSwiperCard heroSwiperData={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='absolute nexttranding flex justify-center items-center top-0 right-0 h-full w-24 cursor-pointer z-20'
                        style={{
                            backgroundImage:
                                "linear-gradient(to left, rgba(240, 240, 240, 0.8) 40%, transparent ",
                        }}
                    >
                        <Image
                            src="/svg/swiper-right-arrow-active.svg"
                            alt="not found"
                            width={20}
                            height={20}
                            className="object-contain ml-9 h-6 w-6 "
                        />
                    </div>
                    {/* {
                        !isEnd &&
                        <div className='absolute next flex justify-center items-center top-0 right-0 h-full w-24 cursor-pointer z-20'
                            style={{
                                backgroundImage:
                                    "linear-gradient(to left, rgba(240, 240, 240, 0.8) 40%, transparent ",
                            }}
                        >
                            <Image
                                src="/svg/swiper-right-arrow-active.svg"
                                alt="not found"
                                width={20}
                                height={20}
                                className="object-contain ml-9 h-6 w-6 "
                            />
                        </div>
                    } */}
                </div>
            </div>

        </div>
    )
}

export default TradingVideos
