'use client'
import React, { useState } from 'react';
import { frequentlyAskedQuestions } from '@/constant/heroconstant';
import Image from 'next/image';

const CustomAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

    };

    return (
        <div className="container mx-auto border">
            {frequentlyAskedQuestions.map((item, index) => (
                <div key={index} className={`border-b rounded-md py-2 ${index === openIndex ? 'bg-[#F9FAFB]' : ''
                    }`}>
                    <div
                        className={`px-4 py-3 text-[18px] leading-[24px] font-medium cursor-pointer flex justify-between`}
                        onClick={() => handleClick(index)}
                    >
                        <div>
                            {item.question}
                        </div>
                        <div className='flex items-center'>
                            <Image src='/svg/upparrow.svg' alt='' width={15} height={15} className={`${index === openIndex ? 'mr-5' : 'rotate-180 mr-5'}`} style={{ transition: 'transform 0.5s' }} />
                        </div>
                    </div>
                    {index === openIndex && (
                        <div className="px-4 pb-3 leading-6 text-[#6B7280] mr-10">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;
