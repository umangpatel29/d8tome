"use client"

import React, { useEffect, useState } from 'react'
import StepOne from './strp1';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image.js';
import { CreateAccountType } from '@/types/createaccounttype/createaccounttype';
import StepTwo from './step2';
import StepFour from './step4';
import StepThree from './step3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    gender: Yup.string().required('Required'),
    showmygender: Yup.string().required('Required'),
    Showme: Yup.string().required('Required'),
    lookingfor: Yup.string().required('Required'),
    profilephoto: Yup.array().min(1, 'At least one photo is required'),
    passion: Yup.string().required('Required'),
    sexualorientation: Yup.string().required('Required'),
});

const CreateAccountSteps = () => {

    const [IsSkipStep, setIsSkipStep] = useState(false)
    const [isRequiredField, setIsRequiredField] = useState(false)
    const steps = [0, 1, 2, 3];

    const [currentStep, setCurrentStep] = useState(2);
    const [completedSteps, setCompletedSteps] = useState([false, false, false, false]); // Array to track completed steps

    const formik = useFormik<CreateAccountType>({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            birthdate: '',
            gender: '',
            showmygender: false,
            showme: '',
            lookingfor: '',
            profilephotos: [],
            passion: [],
            sexualorientation: [],
        },
        validationSchema: SignupSchema,
        onSubmit: (values: CreateAccountType) => {
            console.log(values, 'onsubmit')
        },
    });

    const handleStepClick = (step: number) => {
        // Only allow accessing completed steps
        if (completedSteps[step]) {
            setCurrentStep(step);
        }
    };

    const handleNextClick = () => {
        setCurrentStep((currentStep) => currentStep + 1);
    };

    console.log(formik.values)
    return (
        <div>
            <div className='container mx-auto mb-32 px-3 md:px-0'>
                <div className='flex flex-col justify-center mt-8'>
                    <h1 className='font-bold text-[36px] leading-[46px] text-center'>Create Account</h1>
                    <p className='text-[18px] leading-[30px] font normal text-center w-full md:w-[50%] mx-auto mt-5'>Lorem ipsum dolor sit amet consectetur. Ultricies bibendum ut malesuada varius ante venenatis. Vestibulum arcu.</p>
                </div>

                <div className=' w-full md:w-[70%] mx-auto mt-7 '>
                    <div className='border shadow-sm w-full md:pt-16 pt-5 md:pb-20 pb-5 px-3 md:px-0'
                    >
                        <div className="w-full md:w-[80%] mx-auto mt-5">
                            {/* //steps ****** */}
                            <div className="w-full px-4">
                                <div className="flex justify-between items-center mb-2">
                                    {steps.map((step, index) => (
                                        <React.Fragment key={index}>
                                            {index > 0 && <div className={`flex-grow mx-3 h-1 bg-gray-300 mt-1 ${currentStep >= index && 'bg-primary'}`}></div>}
                                            <div
                                                className={`relative cursor-pointer flex justify-center items-center w-8 h-8 rounded-full border border-gray-300 ${currentStep >= index ? 'bg-primary border-primary' : ''}`}
                                            >
                                                {currentStep >= index && <span className="text-white">{index + 1}</span>}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <hr className='w-full h-[1px] border my-10' />

                            {/* steps Components *********/}
                            <div className=''>
                                {
                                    currentStep === 0 && (
                                        <StepOne formik={formik} handleStepClick={handleStepClick} isRequiredField={isRequiredField} />
                                    )
                                }
                                {
                                    currentStep === 1 && (
                                        <StepTwo handleStepClick={handleStepClick} formik={formik} />
                                    )
                                }
                                {
                                    currentStep === 2 && (
                                        <StepThree formik={formik} />
                                    )
                                }
                                {
                                    currentStep === 3 && (
                                        <StepFour formik={formik} />
                                    )
                                }
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-between mt-7'>
                        <div>
                            {
                                currentStep > 0 &&
                                <button className='border border-primary px-8 py-3 text-primary font-semibold text-[14px] leading-5 rounded-[4px]' onClick={() => setCurrentStep((prev) => prev - 1)}>Previous Step</button>
                            }
                        </div>

                        <div className='flex items-center gap-10'>
                            {
                                IsSkipStep && <p className='text-primary cursor-pointer text-[18px] font-bold'>Skip Step</p>
                            }
                            <button className={`bg-primary px-8 py-4 text-white font-semibold text-[14px] leading-5 rounded-[4px]`} onClick={() => { handleNextClick() }}>Next Step</button>

                        </div>
                    </div>

                </div>
            </div>

            <div className='border py-12'>
                <div className='container mx-auto flex flex-col md:flex-row gap-5 justify-between items-center '>
                    <div>
                        <div className="h-10 w-[93px] mx-auto md:mx-0 cursor-pointer">
                            <Image
                                src="/images/logo.png"
                                alt="Logo not found"
                                width={93}
                                height={40}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className='mt-4 text-[#939393] text-[18px] leading-[20px]'>2024 D8teme All Rights Reserved</p>
                    </div>
                    <div className='border rounded-full shadow-lg py-2 pl-4 pr-2'>
                        <input type="email" value='' placeholder='email' className='h-full' />
                        <button className='rounded-full bg-primary px-4 py-3 text-white font-semibold text-4'>Upgrade</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateAccountSteps