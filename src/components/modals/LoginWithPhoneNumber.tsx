"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import VerifyEmail from './VerifyEmail';
import { VerifyPhone } from '@/services/http/verifyNumber';
import { useUser } from '@/context/useContext';
import Spinner from '../spinner/Spinner';

type HeroVideoProps = {
    forModal?: boolean;
    setForModal: (quantity: boolean) => void;
};

const LoginWithPhoneNumber = ({ setForModal, forModal }: HeroVideoProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const { token, loader, setLoader, getPhoneOtp, phoneNumber, setPhoneNumber } = useUser()
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
                            <div className='flex justify-between'>
                                <span className='font-Poppins text-[#111827] font-semibold text-[20px] leading-7 tracking-[-2%]'>Can we get your number?</span>
                            </div>
                            <div className='flex gap-3 '>
                                <PhoneInput
                                    country={'us'}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <p className='font-Poppins font-normal text-[12px] leading-5 text-[#374151]'>
                                We’ll text you a code to verify you’re really you Message and data rats may apply. <span className='text-[#1E22FB] underline'>What happens if your number changes?</span>
                            </p>
                            <button onClick={() => getPhoneOtp({ closeModal, token })} className='font-Poppins text-white bg-[#FF0080] py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-full text-center'>
                                {loader ? <Spinner color="#FF0080" textColor="#e5e7eb" /> : "Next"}
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default LoginWithPhoneNumber
