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
import React, { useEffect, useMemo, useState } from "react";
import SignUp from "@/components/modals/SignUp";
import Link from "next/link";
import { useUser } from "@/context/useContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const NavbarLogin = () => {

    const [isSignUp, setIsSignUp] = useState(false);
    const [isPhoneNumber, setIsPhoneNumber] = useState(false)
    const [isWelcome, setIsWelcome] = useState(false)
    const [isPricePlanVisible, setIsPricePlanVisible] = useState(false);
    const { isEmailVerification, setIsEmailVerification } = useUser()

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { width } = useWindowSize();
    const { isPhoneNumberCode, setIsPhoneNumberCode, isSignIn, setIsSignIn } = useUser()
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["English"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const handleSelectionChange = (keys: string[]) => {
        setSelectedKeys(new Set(keys));
    };

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
            <div>
                <div className='w-full overflow-hidden h-[768px] relative flex justify-center items-center'>
                    <Image
                        src='/images/heading.png'
                        alt=''
                        fill
                        className='object-cover'
                    />
                    <div className='w-screen h-[768px] absolute bg-[#0000009F]'>

                    </div>
                    <div className='absolute w-full top-0 z-[9999]'>
                        <div className=" bg-transparent py-5 z-[999]">
                            <div className="container mx-auto px-5 flex items-center justify-between w-full">
                                <div className="flex items-center justify-start gap-3 md:gap-10">
                                    <div className="h-10 w-[93px] cursor-pointer">
                                        <Image
                                            src="/svg/loginlogo.svg"
                                            alt="Logo not found"
                                            width={101}
                                            height={43}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className=' flex gap-[10px]  border-[1px] border-white rounded-[8px]'>
                                        <Dropdown>
                                            <DropdownTrigger>
                                                <Button
                                                    variant="bordered"
                                                    className="capitalize px-[30px] text-white"
                                                >
                                                    {selectedValue}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={selectedKeys}
                                                onSelectionChange={handleSelectionChange as any}
                                            >
                                                <DropdownItem key="English" className="text-white py-1">English</DropdownItem>
                                                <DropdownItem key="Hindi" className="text-white">Hindi</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <button onClick={() => setIsSignIn(!isSignIn)} className='px-[40px] py-[10px] rounded-[6px] font-Poppins font-medium text-[18px] leading-[18px] text-black bg-[#fff]'>Log In</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-9 absolute items-center'>
                        <div className='flex flex-col gap-2 items-center'>
                            <span className='font-semibold text-white text-[48px] max-w-[650px]'>Dating Application Concept</span>
                            <span className='font-normal text-center text-[20px] text-white max-w-[470px]'>D8teme is a social dating app that let’s you find & interact with people nearby with similar interests using text, voice messages & fun emojis</span>
                        </div>
                        <button onClick={() => setIsSignIn(true)} className='rounded-[6px] w-fit bg-gradient-to-r from-[#E8012B] to-[#F6794F] text-white text-[16x] font-medium px-9 py-[14px]'>Create Account</button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className={`absolute z-50 slide-right md:!hidden border-t-2 flex-col px-5 h-screen gap-5 pt-5 transition-all duration-300 w-full left-[-500px] transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
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

            <SignUp forModal={isSignUp} setForModal={setIsSignUp} setIsPhoneNumber={setIsPhoneNumber} setIsSignIn={setIsSignIn} />
            <SignIn forModal={isSignIn} setForModal={setIsSignIn} setIsPhoneNumber={setIsPhoneNumber} setIsSignUp={setIsSignUp} />
            {/* <Email forModal={isEmail} setForModal={setIsEmail} setIsVerifyEmail={setIsVerifyEmail} /> */}
            {/* <VerifyEmail forModal={isVerifyEmail} setForModal={setIsVerifyEmail} setIsEmail={setIsEmail} setIsEmailVerification={setIsEmailVerification} /> */}
            <EmailVerificationCode forModal={isEmailVerification} setForModal={setIsEmailVerification} setIsPhoneNumber={setIsPhoneNumber} />
            <LoginWithPhoneNumber forModal={isPhoneNumber} setForModal={setIsPhoneNumber} />
            <PhoneVerificationCode forModal={isPhoneNumberCode} setForModal={setIsPhoneNumberCode} setIsPricePlan={setIsPricePlanVisible} />
            {isPricePlanVisible && (
                <PricePlan setForModal={setIsPricePlanVisible} forModal={isPricePlanVisible} setIsWelcome={setIsWelcome} />
            )}
            <Welcome forModal={isWelcome} setForModal={setIsWelcome} />
        </>
    );
};

export default NavbarLogin;
