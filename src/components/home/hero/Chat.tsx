import Image from "next/image";
import React from "react";

const Chat = () => {
  return (
    <div className="flex flex-col justify-between min-h-[516px] w-full" >
      <div
        className="rounded-t-[15px] bg-chat bg-cover bg-no-repeat p-3 space-y-3"
        style={{ backgroundPosition: "50% 17%" }}
      >
        <div className="flex justify-between items-start w-full">
          <div className="flex items-start justify-start gap-2">
            <div className="h-10 w-10 relative">
              <Image
                src="/images/profile-picture.png"
                alt="not found"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
              <div className="absolute w-[18px] h-[18px] bottom-0 right-0">
                <Image
                  src="/svg/fire.svg"
                  alt="not found"
                  width={18}
                  height={18}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-medium text-[14px] leading-[16px] text-white">
                Harisha Libeya
              </h2>
              <h2 className="font-normal text-[10px] leading-[12px] text-[#D3D3D3]">
                Published 3 days ago
              </h2>
            </div>
          </div>
          <div className="h-[17px] w-[17px]">
            <Image
              src="/svg/setting-white.svg"
              alt="not found"
              width={17}
              height={17}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-end items-center w-full gap-2">
          <p className="font-normal text-[9px] leading-[10px] text-white">
            10k Likes
          </p>
          <p className="font-normal text-[9px] leading-[10px] text-white">
            3.5k Viewer
          </p>
        </div>
      </div>
      <div className="flex justify-center bottom-0 items-center gap-2">
        <div className="h-[36px] w-[36px]  relative border border-[#8b8b8b] rounded-full">
          <Image
            src="/images/profile-picture.png"
            alt="not found"
            width={36}
            height={36}
            className="h-full w-full object-contain"
          />
        </div>
        <input
          type="text"
          placeholder="Type your comments...."
          className="rounded-md w-full bg-[#212121] border border-[#3f3f3f] py-3 px-[15px] font-normal text-[10px] leading-[12px] text-[#9a9a9a]"
        />
      </div>
    </div>
  );
};

export default Chat;
