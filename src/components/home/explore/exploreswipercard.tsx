"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CardDataType } from "@/types/heropagetype/heropagetypes";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type SwiperCardData = {
    heroSwiperData: CardDataType;
}

const ExploreSwiperCard = ({ heroSwiperData }: SwiperCardData) => {

    const [isPlay, setIsPlay] = useState<boolean>(false);


    return (
        <div className="h-[230px] w-full bg-white rounded-lg flex flex-col justify-between">
            <div className="w-full relative h-full">
                <ReactPlayer
                    url={heroSwiperData?.video}
                    height="100%"
                    width="100%"
                    playing={isPlay}
                    onPlay={() => setIsPlay(true)}
                    loop
                />
            </div>

            <div className="absolute bottom-0 rounded-lg w-full py-20" style={{
                backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 20%,rgba(0, 0, 0, 0.4) 40% ,transparent)",
            }}>
                <div className="flex justify-between items-start absolute bottom-4 w-[90%] left-1/2 transform -translate-x-1/2 ">
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
                        <div className="flex flex-col justify-between items-start gap-2">
                            <h2 className="text-white font-semibold text-[15px] leading-[12px]">
                                {heroSwiperData.name}
                            </h2>
                            <h4 className="font-normal text-[13px] leading-[9px] text-white">
                                {heroSwiperData.subTitle}
                            </h4>
                        </div>
                    </div>
                    <div
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => { setIsPlay(!isPlay) }}
                    >
                        <Image
                            src={"/svg/play-dark.svg"}
                            alt="not found"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreSwiperCard;
