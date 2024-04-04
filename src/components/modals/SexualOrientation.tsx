import React from 'react';
import Modal from 'react-modal';
import useWindowSize from '@/hooks/useWindowSize';
import { passionsdata } from '@/constant/heroconstant';
import Image from 'next/image';

interface passionModelType {
    modelIsOpen: boolean;
    setModelIsOpen: (val: boolean) => void;
}
const SexualOrientation = ({ modelIsOpen, setModelIsOpen }: passionModelType) => {

    const { width } = useWindowSize()

    return (
        <Modal
            ariaHideApp={false}
            isOpen={modelIsOpen}
            onRequestClose={() => setModelIsOpen(!modelIsOpen)}
            style={{
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.7)",
                    zIndex: 10000,
                },
                content: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    maxWidth: `${width > 1440 ? '45%' : '600px'} `,
                    margin: 'auto',
                    borderRadius: '5px',
                    height: '70%',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    padding: '0px',
                },
            }}
        >
            <div className="top-[-1px] z-10 bg-white">
                <div
                    className="float-right cursor-pointer pr-2 pt-8 sm:pr-[15px] sm:pt-[15px]"
                    onClick={() => setModelIsOpen(!modelIsOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M18 6L6 18"
                            stroke='black'
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6 6L18 18"
                            stroke='black'
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className='mx-auto'>
                    <div className='mt-8 w-full flex justify-center flex-col'>
                        <h1 className='font-semibold text-6 leading-7 text-center'>Sexual Orientation</h1>
                        <div className='font-normal text-[#808080] text-4 leading-5 text-center mt-3'>Let everyone know what you’re passionate about by adding it to your profile.</div>
                    </div>
                    <div className='flex h-[500px] custom-scroll overflow-y-scroll md:px-20 px-5 flex-wrap justify-center gap-3 mt-8'>
                        {
                            passionsdata.map((data, index) => (
                                <div key={index} className='rounded-full border cursor-pointer border-[#A6A6A6] px-5 py-[10px] text-[14px] text-[#A6A6A6] leading-[20px]'>{data}</div>
                            ))
                        }
                    </div>
                </div>
                <div className='absolute bottom-0 w-full'>
                    <div className='border relative'>
                        <Image src='/images/passionmodal.png' alt='' width={880} height={400} className='' />
                        <div className='absolute top-0 right-0 bottom-0 left-0 flex justify-center items-end pb-8'>
                            <button onClick={() => setModelIsOpen(!modelIsOpen)} className='text-white font-smibold text-4 leading-5 bg-primary rounded px-12 py-5'>Continue</button>
                        </div>
                    </div>

                </div>
            </div>

        </Modal >
    );
};

export default SexualOrientation;
