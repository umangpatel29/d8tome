"use client";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { CardDataType } from "@/types/heropagetype/heropagetypes";
import { Poppins } from "next/font/google";

type CardDataProps = {
  setVideoCardData: (data: CardDataType) => void;
  leftCardData: CardDataType[];
}

function OuterCardSwiper({ setVideoCardData, leftCardData }: CardDataProps) {

  const [characters, setCharacters] = useState(leftCardData);
  // const [lastDirection, setLastDirection] = useState<string>("");
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const swiped = (direction: string, nameToDelete: string) => {
    console.log("🚀 ~ swiped ~ nameToDelete:", nameToDelete, direction)

    // if (direction) {
    //   setLastDirection(direction);
    // }

    // Remove the swiped card from the characters array
    const newCharacters = characters.filter(
      (character) => character.name !== nameToDelete
    );
    setCharacters(newCharacters);
    // Update the active card index if the removed card was the last card
    if (activeCardIndex === characters.length - 1) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };
  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
  };

  useEffect(() => {
    if (characters.length === 0) {
      setCharacters(leftCardData);
    } else {
      const lastindex = characters.length - 1;
      setVideoCardData(characters[lastindex])
    }
  }, [characters]);

  return (
    <>
      <div className="w-full relative h-full col-span-1  flex items-center justify-center">
        {characters.map((character, index, array) => (
          <TinderCard
            className="swipe lg:w-full w-[326px] absolute"
            key={character.name}
            onSwipe={(dir) => { swiped(dir, character.name) }}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{
                backgroundImage: "url(" + character.image + ") ",
                // marginLeft:
                //   array.length - 1 - index === activeCardIndex ? "-10%" : "0",
                // top:
                //   array.length - 1 - index === activeCardIndex ? "-30px" : "0",
                // height:
                //   array.length - 1 - index === activeCardIndex ? "350px" : "",
                transform:
                  array.length - 1 - index === activeCardIndex
                    ? "translate(-25px, 0px)"
                    : "translate(px, 0px)",
              }}
              className={`${array.length - 1 - index === activeCardIndex
                ? "min-h-[520px]"
                : "min-h-[465px]"
                } relative bg-no-repeat w-full bg-cover bg-top rounded-[15px] cursor-pointer shadow-2xl`}
            >
              <div
                className="w-full p-4 absolute bottom-0 rounded-b-[15px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0.9) , rgba(255, 255, 255, 0))",
                }}
              >
                <div className="mt-6">
                  <div className="font-bold text-[30px] leading-[37.5px] text-black">
                    {character.name}
                  </div>
                  <p className="font-normal text-[11px] leading-[15px] text-netural-black mt-1">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh
                  </p>
                  <button className="bg-dark-pink text-white py-2 px-4 text-center rounded-[3px] mt-2 font-medium text-[12px] leading-[15px]">
                    Request to Match
                  </button>
                  <div className="flex items-center w-full flex-wrap justify-start gap-1 mt-3">
                    <div className="bg-light-pink py-[7px] px-[15px] rounded-[27px] text-center font-normal text-[10px] leading-[13.5px]">
                      #aries
                    </div>
                    <div className="bg-light-pink py-[7px] px-[15px] rounded-[27px] text-center font-normal text-[10px] leading-[13.5px]">
                      #photography
                    </div>
                    <div className="bg-light-pink py-[7px] px-[15px] rounded-[27px] text-center font-normal text-[10px] leading-[13.5px]">
                      #aries
                    </div>
                    <div className="bg-light-pink py-[7px] px-[15px] rounded-[27px] text-center font-normal text-[10px] leading-[13.5px]">
                      #musiclover
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </>
  );
}
export default OuterCardSwiper;
