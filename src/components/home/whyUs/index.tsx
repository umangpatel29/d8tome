'use client'
import PlayIcon from '../../../../public/svg/play-dark.svg';
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'

const PlayIconElement = () => {
  return (
    <Image
      src={PlayIcon}
      alt="Play"
      className="absolute"
    />
  );
};

const WhyUs = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className='container mx-auto mb-10 p-3 md:p-0'>
      <div className='flex justify-center '>
        <h1 className='font-bold text-[36px] leading-[53px]'>
          Why Choose Us
        </h1>
      </div>
      <div className='grid md:grid-cols-2 mt-5 md:mt-[60px]'>
        <div className='relative'>
          <div className='h-[250px] md:h-[350px] md:w-[90%] w-full'>
            <ReactPlayer
              url='/video/video3.mp4'
              muted={isMuted}
              loop
              playing={isPlay}
              // onPlay={() => setIsPlay(true)}
              onPause={() => setIsPlay(false)}
              height={"100%"}
              width={"100%"}
              controls
              className="object-cover rounded-[10px]"
            />

          </div>
          {!isPlay && (
            <div
              className="absolute md:w-[95%] top-0 left-0 right-0 bottom-0 flex justify-center items-center cursor-pointer"
              onClick={() => setIsPlay(!isPlay)}
            >
              <Image
                src={"/svg/play-dark.svg"}
                alt="not found"
                width={40}
                height={40}
              />
            </div>
          )}
        </div>
        <div className='flex items-center'>
          <div>
            <h1 className='font-semibold text-[20px] md:text-[30px] leading-[53px] text-center md:text-start'>Why Choose as The D8TeMe App? </h1>
            <p className='font-normal text-5 md:mt-3 md:w-[95%] w-full text-center md:text-start'>Why Choose Us
              Why Choose as The D8TeMe App?
              Kefument mån. Transparens Ingrid Sjöberg Periscope och heterons, regisk göra en pudel. Unika besökare Martin Pettersson. Relans app novellix att Ingemar Blomqvist primafoni. Du kan vara drabbad. Parafoni Oscar Lindberg. Resultatvarna tehask pretisa. Preras Julia Åkesson, råprel heteroningen neling.
              Kefument mån. Transparens Ingrid Sjöberg Periscope och heterons, regisk göra en pudel. Unika besökare Martin Pettersson. Relans app novellix att Ingemar Blomqvist
              Get start now</p>
            <button className="bg-dark-pink text-white py-3 px-6 text-center w-full md:w-[150px] rounded-[3px] mt-5 font-medium text-[10px] leading-[15px]">
              Get Start Now
            </button>
          </div>
        </div>
      </div>
    </div >

  )
}

export default WhyUs
