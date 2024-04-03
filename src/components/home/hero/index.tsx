"use client"

import React, { useState } from "react";
import OuterCardSwiper from "./OuterCardSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroVideo from "./HeroVideo";
import SwiperCard from "./SwiperCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Chat from "./Chat";
import { CardDataType } from "@/types/heropagetype/heropagetypes";
import { CardData } from "@/constant/heroconstant";

// export const CardData = [
//   { id: 1, name: "Alice perry", image: "/images/cardswiper1.png", subTitle: "Personality", video: "/video/fishvideo.mp4" },
//   { id: 2, name: "Bob", image: "/images/cardswiper2.png", subTitle: "Personality", video: "/video/hero-video.mp4" },
//   { id: 3, name: "Charlie Libeya", image: "/images/cardswiper3.png", subTitle: "Personality", video: "/video/video2.mp4" },
//   { id: 4, name: "Dazy tom", image: "/images/cardswiper4.png", subTitle: "Personality", video: "/video/hero-video.mp4" },
//   { id: 5, name: "Natali", image: "/images/cardswiper5.png", subTitle: "Personality", video: "/video/video3.mp4" },
//   { id: 6, name: "Siyara", image: "/images/cardswiper6.png", subTitle: "Personality", video: "/video/fishvideo.mp4" },
//   { id: 7, name: "Naraida", image: "/images/cardswiper7.png", subTitle: "Personality", video: "/video/hero-video.mp4" },
// ];

const Hero = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [videoCardData, setVideoCardData] = useState<CardDataType>()

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
    <div className="bg-gradient-to-r from-red-500 to-blue-500 w-full lg:h-[682px] min-h-[682px]">
      <div className="container mx-auto px-3 md:px-0 grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-1 grid-rows-3  gap-8 justify-center items-center h-full w-full">
        {/* left side  */}

        <OuterCardSwiper setVideoCardData={setVideoCardData} leftCardData={CardData} />

        {/* center side  */}
        <div className="flex flex-col justify-center lg:col-span-2 lg:col-start-2 gap-10">
          <HeroVideo videoCardData={videoCardData} />
          <div className="w-full flex items-center justify-center md:gap-3 gap-2">
            <div
              className={`w-[70px] h-[170px] flex justify-center items-center rounded-l  ${isBeginning ? " bg-[#F4F3F350]" : "bg-[#F4F3F3]"
                }`}
            >
              <div
                className={`prevE0 w-5 h-5 ${!isBeginning ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
              >
                <Image
                  src={
                    isBeginning
                      ? "/svg/swiper-left-arrow.svg"
                      : "/svg/swiper-left-arrow-active.svg"
                  }
                  alt="not found"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              className="mySwiper"
              modules={[Navigation]}
              navigation={{
                prevEl: ".prevE0",
                nextEl: ".nextE0",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onInit={handleInit}
              onSlideChange={handleSlideChange}
            >
              {CardData.map((data, index) => (
                <SwiperSlide key={index}>
                  <SwiperCard heroSwiperData={data} setVideoCardData={() => setVideoCardData(data)} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className={`w-[70px] h-[170px] flex justify-center items-center rounded-r  ${isEnd ? " bg-[#f4f3f350]" : "bg-[#f4f3f3]"
                }`}
            >
              <div
                className={`nextE0 h-5 w-5 ${!isEnd ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
              >
                <Image
                  src={
                    isEnd
                      ? "/svg/swiper-right-arrow.svg"
                      : "/svg/swiper-right-arrow-active.svg"
                  }
                  alt="not found"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* right side  */}
        <Chat />
      </div>
    </div>
  );
};

export default Hero;
