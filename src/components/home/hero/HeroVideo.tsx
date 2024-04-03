"use client"
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CardDataType } from "@/types/heropagetype/heropagetypes";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface OuterCardSwiperProps {
  videoCardData: CardDataType | undefined;
}

const HeroVideo = ({ videoCardData }: OuterCardSwiperProps) => {
  console.log("🚀 ~ HeroVideo ~ videoCardData:", videoCardData)
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState<boolean>(true);
  return (
    <div className="relative rounded-[12px]">
      <div className="relative h-[326px] w-full">
        {/* <Image
                src="/images/hero-video.png"
                alt="not found"
                fill
                className="w-full h-full object-cover rounded-[12px]"
                style={{ objectPosition: "50% 30%" }}
              /> */}
        <ReactPlayer
          // url={"/video/hero-video.mp4"}
          url={videoCardData?.video}
          muted={isMuted}
          loop
          playing={isPlay}
          height={"100%"}
          width={"100%"}
          className="object-cover rounded-[12px]"
        />
      </div>
      <div
        className="absolute bottom-0 w-full flex justify-between items-start p-5 rounded-[12px]"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5) 20%,rgba(0, 0, 0, 0.4) 40%,transparent ",
        }}
      >
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-center gap-2">
            <div
              className="h-5 w-5 cursor-pointer"
              onClick={() => setIsPlay(!isPlay)}
            >
              <Image
                src="/svg/play.svg"
                alt="not found"
                width={539}
                height={326}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="font-normal text-white text-[16px] leading-[24px]">
              Play video..
            </h2>
          </div>
          <h1 className="font-bold text-[16px] leading-[20px] text-white mt-2">
            Harisha Libeya
          </h1>
          <h3 className="font-medium text-[10px] leading-[15px] mt-1 text-white">
            29 Year old
          </h3>
          <p className="max-w-[411px] break-words font-normal text-[10px] leading-[15px] text-white mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.{" "}
          </p>
        </div>
        <div
          className="float-end w-6 h-6 cursor-pointer"
          onClick={() => setIsMuted(!isMuted)}
        >
          <Image
            src="/svg/sound-off.svg"
            alt="not found"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
