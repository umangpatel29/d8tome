"use client"
import Email from "@/components/modals/Email";
import EmailVerificationCode from "@/components/modals/EmailVerificationCode";
import LoginWithPhoneNumber from "@/components/modals/LoginWithPhoneNumber";
import PhoneVerificationCode from "@/components/modals/PhoneVerificationCode";
import PricePlan from "@/components/modals/PricePlan";
import SignIn from "@/components/modals/SignIn";
import VerifyEmail from "@/components/modals/VerifyEmail";
import Welcome from "@/components/modals/Welcome";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SignUp from "@/components/modals/SignUp";

const NavbarLogin = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isEmailVerification, setIsEmailVerification] = useState(false)
    const [isPhoneNumber, setIsPhoneNumber] = useState(false)
    const [isPhoneNumberCode, setIsPhoneNumberCode] = useState(false)
    const [isWelcome, setIsWelcome] = useState(false)
    const [isPricePlanVisible, setIsPricePlanVisible] = useState(false);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { width } = useWindowSize();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    useEffect(() => {
        if (width > 768) {
            setIsOpen(false);
        }
    }, [width]);

    return (
        <>
            <div className="sticky top-0 border-b-2 bg-white py-5 z-[999]">
                <div className="container mx-auto px-5 md:px-0 flex items-center justify-between w-full">
                    <div className="flex items-center justify-start gap-3 md:gap-10">

                        <div className="h-10 w-[93px] cursor-pointer">
                            <Image
                                src="/images/logo.png"
                                alt="Logo not found"
                                width={93}
                                height={40}
                                className="w-full h-full object-contain"
                            />
                        </div>

                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => setIsSignIn(!isSignIn)} className='hidden md:flex px-6 py-[10px] rounded-lg font-Poppins font-medium text-[18px] leading-[18px] text-primary border border-primary'>Sign Up</button>
                        <button onClick={() => setIsSignIn(!isSignIn)} className='px-[34px] py-[10px] rounded-lg font-Poppins font-medium text-[18px] leading-[18px] text-white bg-[#F13170]'>Log In</button>
                    </div>

                </div>
            </div>

            {isOpen && (
                <div
                    className={`absolute z-50 slide-right md:!hidden border-t-2 flex-col px-5 h-screen bg-white gap-5 pt-5 transition-all duration-300 w-full left-[-500px] transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        }`}
                    style={{
                        height: isOpen ? "calc(100dvh - 80px)" : 0,
                        overflowY: "auto",
                        overflowX: "hidden",
                        display: isOpen ? "flex" : "none",
                    }}
                >
                    <div className="flex justify-start items-center gap-3 ">
                        <div className="h-5 w-5">
                            <Image
                                src="/svg/home.svg"
                                alt="home logo not found"
                                height={20}
                                width={20}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-netural-black font-medium text-sm leading-[20px] capitalize cursor-pointer">
                            Home
                        </h3>
                    </div>
                    <div className="flex justify-start items-center gap-2 ">
                        <div className="h-5 w-5">
                            <Image
                                src="/svg/graph.svg"
                                alt="home logo not found"
                                height={20}
                                width={20}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-netural-black font-medium text-sm leading-[20px] capitalize cursor-pointer">
                            top categories
                        </h3>
                        <div className="h-5 w-5 cursor-pointer">
                            <Image
                                src="/svg/arrow-down.svg"
                                alt="home logo not found"
                                height={20}
                                width={20}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-2 ">
                        <div className="h-5 w-5">
                            <Image
                                src="/svg/cube.svg"
                                alt="home logo not found"
                                height={20}
                                width={20}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-netural-black font-medium text-sm leading-[20px] capitalize cursor-pointer">
                            all categories
                        </h3>
                        <div className="h-5 w-5 cursor-pointer">
                            <Image
                                src="/svg/arrow-down.svg"
                                alt="home logo not found"
                                height={20}
                                width={20}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-2 ">
                        <div className="h-5 w-5">
                            <Image
                                src="/svg/setting.svg"
                                alt="home logo not found"
                                height={20}
                                width={20}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-netural-black font-medium text-sm leading-[20px] capitalize cursor-pointer">
                            settings
                        </h3>
                    </div>
                </div>
            )}

            <SignUp forModal={isSignUp} setForModal={setIsSignUp} setIsPhoneNumber={setIsPhoneNumber} setIsEmailVerification={setIsEmailVerification} setIsSignIn={setIsSignIn}/>
            <SignIn forModal={isSignIn} setForModal={setIsSignIn} setIsPhoneNumber={setIsPhoneNumber} setIsSignUp={setIsSignUp} />
            {/* <Email forModal={isEmail} setForModal={setIsEmail} setIsVerifyEmail={setIsVerifyEmail} /> */}
            {/* <VerifyEmail forModal={isVerifyEmail} setForModal={setIsVerifyEmail} setIsEmail={setIsEmail} setIsEmailVerification={setIsEmailVerification} /> */}
            <EmailVerificationCode forModal={isEmailVerification} setForModal={setIsEmailVerification} setIsPhoneNumber={setIsPhoneNumber} />
            <LoginWithPhoneNumber forModal={isPhoneNumber} setForModal={setIsPhoneNumber} setIsPhoneNumberCode={setIsPhoneNumberCode} />
            <PhoneVerificationCode forModal={isPhoneNumberCode} setForModal={setIsPhoneNumberCode} setIsPricePlan={setIsPricePlanVisible} />
            {isPricePlanVisible && (
                <PricePlan setForModal={setIsPricePlanVisible} forModal={isPricePlanVisible} setIsWelcome={setIsWelcome} />
            )}
            <Welcome forModal={isWelcome} setForModal={setIsWelcome} />
        </>
    );
};

export default NavbarLogin;
