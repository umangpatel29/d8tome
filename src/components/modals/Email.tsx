"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import VerifyEmail from './VerifyEmail';

type HeroVideoProps = {
    forModal?: boolean;
    setForModal: (quantity: boolean) => void;
    setIsVerifyEmail: (quantity: boolean) => void;
};

const Email = ({ setForModal, forModal, setIsVerifyEmail }: HeroVideoProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);
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
            <div className=''>
                <Modal
                    ariaHideApp={false}
                    className={` w-[448px] bg-white overflow-y-auto`}
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
                    <div className='flex flex-col gap-[10px] pb-[55px] px-[32px] ' >
                        <div className='flex justify-end mt-[23px] cursor-pointer' onClick={closeModal}>
                            <Image
                                src="/svg/closebutton.svg"
                                alt="close"
                                width={16}
                                height={16}
                                className=""
                            />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex justify-center'>
                                <Image
                                    src="/svg/logo.svg"
                                    alt="logo"
                                    width={104}
                                    height={44}
                                    className=""
                                />
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-Poppins text-[#111827] font-semibold text-[20px] leading-7 tracking-[-2%]'>Email verification</span>
                                <span className='font-Poppins font-medium text-[14px] leading-[20px] text-[#1E22FB]'>I have an account</span>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <input type="text" placeholder='Email' className='w-[384px] border-[1px] border-[#dcdfe4] outline-[#dcdfe4] pl-[12px] py-[10px] text-[#9CA3AF] font-Poppins font-normal text-[14px] leading-5 rounded-[12px]' />
                                <p className='font-Poppins font-normal text-[12px] leading-5 text-[#374151]'>
                                    By signing up, you agree to the
                                    <span className='font-Poppins font-medium underline text-[12px] mx-1 leading-5 text-[#374151]'>
                                        Terms and Conditions
                                    </span> and
                                    <span className='mx-1 font-Poppins font-medium underline text-[12px] leading-5 text-[#374151]'>
                                        Privacy Policy.
                                    </span>
                                </p>
                            </div>
                            <button onClick={() => { closeModal(); setIsVerifyEmail(true)}} className='font-Poppins text-white bg-[#FF0080] py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-full text-center'>Send verification code</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Email
