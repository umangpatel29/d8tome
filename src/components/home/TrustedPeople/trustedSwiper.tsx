"use client"

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardData } from '@/constant/heroconstant';
import TrustedSwiperCards from './trustedSwiperCards';
import Image from 'next/image';


const TrustedSwiper = () => {
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
        <div>
            <div className='md:ml-44 ml-0'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".prevTrust",
                        nextEl: ".nextTrust",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3.5,
                        },
                        768: {
                            slidesPerView: 4.5,
                        },
                        1024: {
                            slidesPerView: 5.5,
                        },
                    }}
                    onInit={handleInit}
                    onSlideChange={handleSlideChange}
                >
                    {CardData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <TrustedSwiperCards heroSwiperData={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='relative z-20 mt-10'>
                <div className='flex justify-center'>
                    <div className='flex gap-1'>
                        <Image
                            src='/svg/trustednexticon.svg' alt='' width={45} height={45}
                            className={` ${isBeginning && 'opacity-30'} prevTrust rotate-180 cursor-pointer`}
                        />
                        < Image
                            src='/svg/trustednexticon.svg' alt='' width={45} height={45}
                            className={` ${isEnd && 'opacity-30'} nextTrust cursor-pointer`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedSwiper




