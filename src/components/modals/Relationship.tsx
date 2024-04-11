"use client"
import { relationshipData } from '@/constant/data';
import { useUser } from '@/context/useContext';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import { CreateAccountType } from '@/types/createaccounttype/createaccounttype';
import { FormikProps } from 'formik';

type HeroVideoProps = {
    forModal?: boolean;
    setForModal: (quantity: boolean) => void;
    formik: FormikProps<CreateAccountType>
};

const Relationship = ({ setForModal, forModal, formik }: HeroVideoProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const { values, setFieldValue } = formik;
    const { activeIndex, setActiveIndex, activeDiv, setActiveDiv } = useUser()
        const closeModal = () => {
            setIsClosing(true); // Set closing state to trigger animation
            setTimeout(() => {
                setIsOpen(false);
                setForModal(false);
                document.body.style.overflow = 'unset';
                setIsClosing(false); // Reset closing state after animation
            }, 500); // Adjust the timeout to match the animation duration
        };
    const openModal = () => {
        setIsOpen(true);
        setForModal(true);
        document.body.style.overflow = "hidden";
    };

    const handleDivClick = (index: number) => {
        if (activeDiv === index) {
            setActiveDiv(null); // If the clicked div is already active, deactivate it
        } else {
            setActiveDiv(index); // Otherwise, set the clicked div as active
            setActiveIndex(index); // Set active index for other purposes if needed
        }
    };

    const handleRelationshipSelect = (relationshipTitle: string) => {
        // Assuming you have a field in your formik values to store the selected relationship
        console.log("vfbhfbhggbrhvbh")
        console.log(relationshipTitle, "relationship")
        setFieldValue('looking_for', relationshipTitle);
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
                    className={` w-[448px] bg-white overflow-y-auto  ${modalIsOpen && !isClosing ? "scale-in-center" : "scale-out-center"}`}
                    onRequestClose={closeModal}
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
                            inset: "20% auto auto 40%",
                            right: "auto",
                            bottom: "auto",
                            marginRight: "-50%",
                            transform: "translate(-50%, -50%)",
                            borderRadius: "12px",
                            padding: 0,
                        },
                    }}
                >
                    <div className='flex flex-col gap-5 px-[44px] py-12'>
                        <div className='flex flex-col gap-2'>
                            <span className='font-Poppins font-semibold text-[24px] leading-7 text-center text-[#2D262E]'>Right now i’m looking for...</span>
                            <span className='font-Poppins font-normal text-[16px] leading-5 text-center text-[#808080]'>Lorem ipsum dolor sit amet Odio augue</span>
                        </div>
                        <div className={`grid grid-cols-3 gap-[6px] p-4 min-w-[350px]`}>
                            {
                                relationshipData.map((data, index) => {
                                    return (
                                        <>
                                            <div onClick={() => { handleDivClick(index); handleRelationshipSelect(data.title) }} className={`${activeDiv == index ? "border-2 border-[#FF0080] bg-white w-full" : "bg-[#f0f2f4] border-2 border-transparent"} flex cursor-pointer rounded-[8px] min-h-[130px] min-w-[106px] pt-4 items-center flex-col gap-2 p-2 `}>
                                                <div>
                                                    <Image
                                                        src={data.icon}
                                                        alt="close"
                                                        width={32}
                                                        height={32}
                                                        className=""
                                                    />
                                                </div>
                                                <span className='font-Poppins font-normal text-[15px] leading-5 text-center text-[#808080]'>{data.title}</span>
                                            </div >
                                        </>
                                    )
                                })
                            }
                        </div>
                        <button onClick={closeModal} className='bg-primary rounded-[32px] px-8 py-4 text-white font-semibold text-[14px] leading-5 '>Continue</button>
                    </div>
                </Modal >
            </div >
        </>
    )
}

export default Relationship
