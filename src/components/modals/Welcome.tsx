"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { WelcomeData } from '@/constant/heroconstant';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useUser } from '@/context/useContext';
import { useRouter } from 'next/navigation';

type HeroVideoProps = {
    forModal?: boolean;
    setForModal: (quantity: boolean) => void;
};

const Welcome = ({ setForModal, forModal }: HeroVideoProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const { isLogin, setIsLogin } = useUser()
    const router = useRouter()

    const closeModal = () => {
        setIsOpen(false);
        setForModal(false);
        document.body.style.overflow = "unset";
    };
    const openModal = () => {
        setIsOpen(true);
        setForModal(true);
        document.body.style.overflow = "hidden";
    };

    const handleSwiper = () => {
        if (activeIndex < WelcomeData.length - 1)
            setActiveIndex(activeIndex + 1)
        if (activeIndex === WelcomeData.length - 1) { closeModal(); router.push('/createaccount') }
        swiper?.slideNext()
    }

    useEffect(() => {
        if (forModal) {
            openModal();
        }
        if (!forModal) {
            closeModal();
        }
    }, [forModal]);
    return (
        <>
            <div className='w-[543px]'>
                <Modal
                    ariaHideApp={false}
                    className={` w-[489px] bg-white overflow-y-auto`}
                    isOpen={modalIsOpen}
                    style={{
                        overlay: {
                            backgroundColor: "rgba(0,0,0,0.7)",
                            zIndex: 10000,
                        },
                        content: {
                            backgroundColor: " rgba(255, 255, 255)",
                            outline: "none",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            bottom: "auto",
                            marginRight: "-50%",
                            transform: "translate(-50%, -50%)",
                            borderRadius: "12px",
                            padding: 0,
                        },
                    }}
                >
                    <div className='w-full py-[38px] px-[30px] h-[588px] relative'>
                        <Swiper pagination={true} modules={[Pagination]} onSwiper={(swiper) => setSwiper(swiper)} initialSlide={activeIndex} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} className="mySwiper">
                            {WelcomeData.map((data, index) => {
                                return (
                                    <>
                                        <SwiperSlide key={index}>
                                            <div key={index} className='flex flex-col gap-[25px] '>
                                                <div className='flex justify-center'>
                                                    <Image
                                                        src="/images/logo.png"
                                                        alt="logo"
                                                        width={104}
                                                        height={44}
                                                        className=""
                                                    />
                                                </div>
                                                <div className='flex flex-col gap-[6px] items-center'>
                                                    <span className='font-Poppins text-[#111827] font-semibold text-[20px] leading-7 tracking-[-2%]'>{data.welcomeText}</span>
                                                    <span className='font-Poppins text-[#374151] font-medium text-[14px] leading-[20px] text-center'>{data.welcomeTitle}</span>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <Image
                                                        src={data.welcomeImage}
                                                        alt="logo"
                                                        width={281}
                                                        height={186}
                                                        className=""
                                                    />
                                                </div>
                                                <div className='flex flex-col gap-[6px]'>
                                                    <span className='font-Poppins text-[#111827] font-semibold text-[18px] leading-7 text-center'>{data.welcomeDesc}</span>
                                                    <span className='font-Poppins font-normal text-[#374151] text-[14px] leading-5 text-center'>{data.welcomeFullDesc}
                                                    </span>
                                                </div>

                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            }
                            )}
                        </Swiper>
                        <div className='swiper-pagination'></div>
                    </div>
                    <div className='flex justify-center gap-[11px] pb-7'>
                        <button onClick={closeModal} className='font-Poppins text-[#FF0080] bg-white border-[1px] border-[#FF0080] py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-[154px] text-center'>Dismiss</button>
                        <button onClick={() => { handleSwiper() }} className='font-Poppins text-white bg-[#FF0080] py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-[154px] text-center'>Next</button>
                    </div>

                </Modal >
            </div >
        </>
    )
}

export default Welcome
