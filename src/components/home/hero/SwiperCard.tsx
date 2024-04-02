"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CardDataType } from "@/types/heropagetype/heropagetypes";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type SwiperCardData = {
  heroSwiperData: CardDataType;
  setVideoCardData?: () => void
}

const SwiperCard = ({ heroSwiperData, setVideoCardData }: SwiperCardData) => {

  const [isPlay, setIsPlay] = useState<boolean>(false);

  return (
    <div className="w-full h-[170px] bg-white rounded-lg p-[6.51px] flex flex-col justify-between">
      <div className="w-full">
        {/* <Image
          src={heroSwiperData.image}
          alt="not found"
          width={139}
          height={77}
          className="w-full h-full object-contain"
        /> */}
        <ReactPlayer
          url={heroSwiperData?.video}
          height="115px"
          width="100%"
          playing={isPlay}
          onPlay={() => setIsPlay(true)}
          loop
        />
      </div>
      <div className="flex justify-between items-start">
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={heroSwiperData.image}
              alt="not found"
              width={32}
              height={32}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col justify-between items-start gap-1">
            <h2 className="font-semibold text-[12px] leading-[12px] text-[#363636]">
              {heroSwiperData.name}
            </h2>
            <h4 className="font-normal text-[10px] leading-[9px] text-netural-black">
              {heroSwiperData.subTitle}
            </h4>
          </div>
        </div>
        <div
          className="h-5 w-5 cursor-pointer"
          onClick={() => { setIsPlay(!isPlay), setVideoCardData && setVideoCardData() }}
        >
          <Image
            src={"/svg/play-dark.svg"}
            alt="not found"
            width={20}
            height={20}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
