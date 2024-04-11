import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import Modal from "react-modal";
import Spinner from '../spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import { useUser } from '@/context/useContext';
import { Verifyemail } from '@/services/http/verifyEmail';

type HeroVideoProps = {
    forModal?: boolean | null;
    setForModal: (quantity: boolean) => void;
    setIsPhoneNumber: (quantity: boolean) => void;
};

const EmailVerificationCode = ({ setForModal, forModal, setIsPhoneNumber }: HeroVideoProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState<string[]>(['', '', '', '', '', '']);
    const [activeInput, setActiveInput] = useState<number | null>(null); // Track active input index
    const inputsRef = useRef<HTMLInputElement[]>([]);
    const [otp, setOtp] = useState("")
    const [isValidOtp, setIsValidOtp] = useState(false)
    const { token, getOtp } = useUser()

    useEffect(() => {
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
    }, []);

    useEffect(() => {
        // Check if all fields are filled
        const isAllFilled = verificationCode.every(code => code !== '');
        if (isAllFilled) {
            const otpValue = verificationCode.join(''); // Concatenate all digits
            setOtp(otpValue); // Set otp state with the concatenated value
        }
    }, [verificationCode]);

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // If this is the last input field, limit the value to a single digit
        const newValue = index === 5 ? value.slice(0, 1) : value.slice(0, 1); // Limit value to single digit

        setVerificationCode(prevCode => {
            const newCode = [...prevCode];
            newCode[index] = newValue;
            return newCode;
        });

        if (newValue && index < 5 && inputsRef.current[index + 1]) {
            inputsRef.current[index + 1].focus();
        }

        if (!newValue && index > 0 && inputsRef.current[index - 1]) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleVerify = async () => {
        const isAllFilled = verificationCode.every(code => code !== '');
        setIsValidOtp(true);
        if (isAllFilled) {
            await Verifyemail.ValidateEmail(
                { otp }, token || ""
            ).then((res) => {
                setIsValidOtp(false);
                closeModal();
                setIsPhoneNumber(true);
            }).catch((err) => {
                setIsValidOtp(false);
                console.log(err);
            });
        } else {
            // Trigger toast if not all fields are filled
            toast.error("Invalid otp");
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
                                <span className='font-Poppins text-[#111827] font-semibold text-[20px] leading-7 tracking-[-2%]'>Enter verification code</span>
                                <span className='font-Poppins font-normal text-[12px] leading-[20px] '>Type in the 6-digit verification code sent to the your email address</span>
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
                                        onChange={(event) => { handleInputChange(index, event) }}
                                        onKeyDown={event => handleInputAndKeyDown(index, event)}
                                        onFocus={() => setActiveInput(index)} // Set active input index
                                        onBlur={() => setActiveInput(null)} // Reset active input index
                                        className={`w-[54px] h-[60px] text-[#9CA3AF] rounded-[8px] border-[1px] text-center text-[30px] border-[#9CA3AF] ${activeInput === index ? 'bg-[#e0e3e5]' : ''}`}
                                    />
                                ))}
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <button onClick={() => { handleVerify() }} className='font-Poppins text-white bg-[#FF0080] py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-full text-center'>
                                    {
                                        isValidOtp ? <Spinner color="#FF0080" textColor="#e5e7eb"/> : "Next"
                                    }
                                </button>
                                <div className='w-full flex justify-end'><button onClick={() => getOtp(token as string)} className='font-Poppins text-[#FF0080] bg-white py-[10px] rounded-[6px] font-medium text-[14px] leading-7 w-[80px]'>Re-Send</button></div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <ToastContainer />
        </>
    )
}

export default EmailVerificationCode
