"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import Email from './Email';

type HeroVideoProps = {
    forModal?: boolean;
    setForModal: (quantity: boolean) => void;
    setIsEmail: (quantity: boolean) => void;
    setIsEmailVerification: (quantity: boolean) => void;
};

const VerifyEmail = ({ setForModal, forModal, setIsEmail, setIsEmailVerification }: HeroVideoProps) => {
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
                        <div className='flex justify-start mt-[23px] cursor-pointer' onClick={() => { closeModal(); setIsEmail(true) }}>
                            <Image
                                src="/svg/backstep.svg"
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
                            <div className='flex flex-col gap-[6px] items-center'>
                                <span className='font-Poppins text-[#111827] font-semibold text-[20px] leading-7 tracking-[-2%]'>Verify your email</span>
                                <span className='font-Poppins font-medium text-[12px] leading-[20px] text-center'>you will need to verify your email to complete the registration</span>
                            </div>
                            <div className='flex justify-center'>
                                <Image
                                    src="/svg/verifyemailstep.svg"
                                    alt="logo"
                                    width={252}
                                    height={177}
                                    className=""
                                />
                            </div>
                            <span className='font-Poppins font-normal text-[12px] leading-5 text-center'>An email has been set to jnfds@gmail.com with a link to verify your account.</span>
                            <div className='flex justify-around'>
                                <button onClick={() => { closeModal(); setIsEmail(true) }} className='font-Poppins text-[#FF0080] bg-white border-[1px] border-[#FF0080] py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-[154px] text-center'>Back</button>
                                <button onClick={() => { closeModal(); setIsEmailVerification(true) }} className='font-Poppins text-white bg-[#FF0080] py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-[154px] text-center'>Re-Send</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

        </>
    )
}

export default VerifyEmail
