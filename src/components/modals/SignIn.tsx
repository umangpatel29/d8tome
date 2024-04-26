"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import Email from './Email';
import { useUser } from '@/context/useContext';
import Spinner from '../spinner/Spinner';
import { GoogleOAuthProvider } from '@react-oauth/google';

type HeroVideoProps = {
    forModal?: boolean | null;
    setForModal: (quantity: boolean) => void;
    setIsPhoneNumber: (quantity: boolean) => void;
    setIsSignUp: (quantity: boolean) => void;
};

const SignIn = ({ setForModal, forModal, setIsPhoneNumber, setIsSignUp }: HeroVideoProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const { signin, email, setIsEmail, password, setPassword, loader, SignInWithGoogle } = useUser()
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

    const googleAuth = () => {
        window.open(
            `https://d8teme-752t.onrender.com/api/v1/google/callback`,
            "_self"
        );
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
                    className={` w-[448px] bg-white lg:h-[90dvh] overflow-y-auto`}
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
                    <div className='flex flex-col gap-[10px] h-fit pb-[37px] px-[32px] ' >
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
                                <span className='font-Poppins text-[#111827] font-semibold text-[20px] leading-7 tracking-[-2%]'>Sign in</span>
                                <span onClick={() => { closeModal(); setIsSignUp(true) }} className='font-Poppins font-medium text-[14px] cursor-pointer leading-[20px] text-[#1E22FB]'>I don&apos;t have an account</span>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <input type="text" placeholder='Email' value={email} onChange={(e) => setIsEmail(e.target.value)} className='w-[384px] border-[1px] border-[#dcdfe4] outline-[#dcdfe4] pl-[12px] py-[10px] text-[#9CA3AF] font-Poppins font-normal text-[14px] leading-5 rounded-[12px]' />
                                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-[384px] border-[1px] border-[#dcdfe4] outline-[#dcdfe4] pl-[12px] py-[10px] text-[#9CA3AF] font-Poppins font-normal text-[14px] leading-5 rounded-[12px]' />
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
                            <div className='flex flex-col gap-5'>
                                <button onClick={() => { signin({ email, password, closeModal }) }} className='font-Poppins rounded-[6px] font-medium text-[14px] leading-7 text-center text-white bg-[#FF0080] px-[24px] py-[10px]'>
                                    {loader ? <Spinner color="#FF0080" textColor="#e5e7eb"/> : "Agree and Sign in"}
                                </button>
                                <span className='border-t-[1px] border-[#6B7280] relative'>
                                    <span className='absolute bg-white px-[7px] font-Poppins text-[#6B7280] font-semibold text-[14px] leading-5 tracking-[0.3px] top-[-11px] left-[33%]'>or sign up with</span>
                                </span>
                                <button onClick={() => setOpen(!open)} className={`${open ? "hidden" : "block"} font-inter rounded-[6px] font-medium text-[14px] leading-7 text-center text-[#1E1E1E] bg-[#e8e8e9] px-[24px] py-[10px]`}>More Option</button>
                                {
                                    open && (
                                        <div className='flex flex-col gap-[10px]'>
                                            <div className='flex gap-8 py-[14px] pl-[24px] border-[1px] rounded-[6px] boder-[#D1D5DB] cursor-pointer'>
                                                <Image
                                                    src="/svg/facebook.svg"
                                                    alt="logo"
                                                    width={20}
                                                    height={20}
                                                    className=""
                                                />
                                                <span className='font-inter font-medium text-[16px] leading-7'>Log in with Facebook</span>
                                            </div>
                                            <div onClick={SignInWithGoogle} className='flex gap-8 py-[14px] pl-[24px] border-[1px] rounded-[6px] boder-[#D1D5DB] cursor-pointer'>
                                                <Image
                                                    src="/svg/google.svg"
                                                    alt="logo"
                                                    width={20}
                                                    height={20}
                                                    className=""
                                                />
                                                <span className='font-inter font-medium text-[16px] leading-7'>Log in with Google</span>
                                            </div>
                                            <div className='flex gap-8 py-[14px] pl-[24px] rounded-[6px] border-[1px] boder-[#D1D5DB] cursor-pointer' onClick={() => { closeModal(); setIsPhoneNumber(true) }}>
                                                <Image
                                                    src="/svg/phone.svg"
                                                    alt="logo"
                                                    width={20}
                                                    height={20}
                                                    className=""
                                                />
                                                <span className='font-inter font-medium text-[16px] leading-7'>Log in with Phone number</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div>
                                <p className='font-Poppins font-normal text-[12px] leading-5 text-[#6B7280]'>This site is protected by reCAPTCHA and the Google <span className='font-medium underline'>Privacy Policy</span> and <span className='font-medium underline'>Terms of Service</span> apply.
                                    <br /><br />
                                    <span>You also agree to receive product-related marketing emails from D8teme, which you can unsubscribe from at any time.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            {/* <Email forModal={play} setForModal={setPlay} /> */}
        </>
    )
}

export default SignIn
