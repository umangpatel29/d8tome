"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import Modal from "react-modal";
import VerifyEmail from './VerifyEmail';

type HeroVideoProps = {
    forModal?: boolean;
    setForModal: (quantity: boolean) => void;
    setIsPricePlan: (quantity: boolean) => void;
};

const PhoneVerificationCode = ({ setForModal, forModal, setIsPricePlan }: HeroVideoProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState<string[]>(['', '', '', '', '', '']);
    const inputsRef = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
    }, []);

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setVerificationCode(prevCode => {
            const newCode = [...prevCode];
            newCode[index] = value;
            return newCode;
        });

        if (value && index < 5 && inputsRef.current[index + 1]) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' && !verificationCode[index] && index > 0) {
            event.preventDefault();
            inputsRef.current[index - 1].focus();
        }
    };

    const handleInputAndKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        handleKeyDown(index, event);
    };

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
                                    src="/images/logo.png"
                                    alt="logo"
                                    width={104}
                                    height={44}
                                    className=""
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-Poppins text-[#111827] font-semibold text-[20px] leading-7 tracking-[-2%]'>Enter OTP</span>
                                <span className='font-Poppins font-normal text-[14px] leading-[20px] '>Type in the 6-digit code sent to the number +91 9867589684</span>
                            </div>
                            <div className='flex gap-[10px] '>
                                {verificationCode.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={el => {
                                            if (el) {
                                                inputsRef.current[index] = el;
                                            }
                                        }}
                                        type="number"
                                        maxLength={1}
                                        value={digit}
                                        onChange={event => handleInputChange(index, event)}
                                        onKeyDown={event => handleInputAndKeyDown(index, event)}
                                        className='w-[54px] h-[60px] text-[#9CA3AF] rounded-[8px] border-[1px] text-center text-[30px] border-[#9CA3AF]'
                                    />
                                ))}
                            </div>
                            <div className='flex gap-[17px] w-fit items-center px-[18px] py-2  rounded-[23px] shadow-grayshadow'>
                                <div>
                                    <Image
                                        src="/svg/message.svg"
                                        alt="message"
                                        width={20}
                                        height={20}
                                        className=""
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-Poppins font-medium text-[14px] leading-5 tracking-[0.1px]'>Autofill code</span>
                                    <span className='font-Poppins font-normal text-[11px] leading-4 tracking-[0.5px]'>from Messages</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[14px]'>
                                <span className='font-Poppins font-medium text-[14px] leading-5 text-[#1E22FB]'>Update a contact info</span>
                                <div className='flex flex-col gap-[10px]'>
                                    <button onClick={() => { closeModal(); setIsPricePlan(true) }} className='font-Poppins text-white bg-[#FF0080] py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-full text-center'>Next</button>
                                    <div className='w-full flex justify-end'><button onClick={() => { closeModal(); }} className='font-Poppins text-[#FF0080] bg-white py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-[80px]'>Re-Send</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default PhoneVerificationCode
