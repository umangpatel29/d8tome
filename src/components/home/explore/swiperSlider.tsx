"use client"

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ExploreSwiperCard from './exploreswipercard';
import Image from 'next/image';
// import { CardData } from '@/constant/heroconstant';


export const CardData = [
    { id: 1, name: "Alice perry", image: "/images/cardswiper1.png", subTitle: "Personality", video: "/video/fishvideo.mp4" },
    { id: 2, name: "Bob", image: "/images/cardswiper2.png", subTitle: "Personality", video: "/video/hero-video.mp4" },
    { id: 3, name: "Charlie Libeya", image: "/images/cardswiper3.png", subTitle: "Personality", video: "/video/video2.mp4" },
    { id: 4, name: "Dazy tom", image: "/images/cardswiper4.png", subTitle: "Personality", video: "/video/hero-video.mp4" },
    { id: 5, name: "Natali", image: "/images/cardswiper5.png", subTitle: "Personality", video: "/video/video3.mp4" },
    { id: 6, name: "Siyara", image: "/images/cardswiper6.png", subTitle: "Personality", video: "/video/fishvideo.mp4" },
    { id: 7, name: "Naraida", image: "/images/cardswiper7.png", subTitle: "Personality", video: "/video/hero-video.mp4" },
];

const SwiperSlider = () => {

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
        <>
            <div className='relative top-0 left-0'>
                {/* <div className='absolute flex justify-center items-center top-0 left-0 h-full w-24 cursor-pointer z-20'
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
                        className="object-contain nextEl mr-9 h-6 w-6"
                    />
                </div> */}

                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    className="mySwiper"
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".nextEl",
                        nextEl: ".prevEl",
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
                <div className='absolute flex justify-center items-center top-0 right-0 h-full w-24 cursor-pointer z-20'
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
                        className="object-contain ml-9 h-6 w-6 prevEl"
                    />
                </div>
            </div>
        </>

    );
}


export default SwiperSlider;