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
});

interface CreateAccountStepsProps {
    setIsHomePage: () => void;
}

const CreateAccountSteps = ({ setIsHomePage }: CreateAccountStepsProps) => {

    const [IsSkipStep, setIsSkipStep] = useState(false)
    const [isRequiredField, setIsRequiredField] = useState(false)
    const steps = [0, 1, 2, 3];

    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([false, false, false, false]); // Array to track completed steps

    const formik = useFormik<CreateAccountType>({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            birthdate: ''
        },
        validationSchema: SignupSchema,
        onSubmit: (values: any) => {
            console.log(values);
            // Assuming validation passed, mark the current step as completed
            const updatedCompletedSteps = [...completedSteps];
            updatedCompletedSteps[currentStep] = true;
            setCompletedSteps(updatedCompletedSteps);
            // Move to the next step if not on the last step
            if (currentStep < 3) {
                setCurrentStep(currentStep + 1);
            }
        },
    });

    const handleStepClick = (step: number) => {
        // Only allow accessing completed steps
        if (completedSteps[step]) {
            setCurrentStep(step);
        }
    };

    const [arePhotosUploaded, setArePhotosUploaded] = useState(false); // State variable to track photo upload status

    const handlePhotosUploaded = () => {
        setArePhotosUploaded(true);
        handleStepClick(3)
    };

    const handleNextStep = () => {
        // Check if all required fields are filled in the current step
        if (formik.isValid && formik.dirty) {
            formik.handleSubmit();
            // setCurrentStep((prev) => prev + 1) // Submit the form if validation passes
        } else {
            const firstErrorField = Object.keys(formik.errors)[0];
            if (firstErrorField) {
                const errorElement = document.getElementsByName(firstErrorField)[0];
                errorElement.scrollIntoView({ behavior: "smooth", block: "center" });

                // Display error message below the input field
                const errorMessage = formik.errors[firstErrorField as keyof typeof formik.errors];
                const errorField = document.getElementById(`${firstErrorField}-error`);
                if (errorField) {
                    errorField.innerText = errorMessage as any;
                }
            }
        }
    };

    const handleNextClick = () => {
        if (currentStep < 2) { handleNextStep(); }
        if (arePhotosUploaded) {
            handleNextStep();
        } else if (currentStep === 2 && !arePhotosUploaded) {
            const notify = () => toast.error("Please upload at least 2 photos.");
            notify()
        };
    }

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
                                        <StepTwo handleStepClick={handleStepClick} />
                                    )
                                }
                                {
                                    currentStep === 2 && (
                                        <StepThree handlePhotosUploaded={handlePhotosUploaded} />
                                    )
                                }
                                {
                                    currentStep === 3 && (
                                        <StepFour handleStepClick={handleStepClick} />
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
                            <button className={`bg-primary px-8 py-4 text-white font-semibold text-[14px] leading-5 rounded-[4px]`} onClick={() => { handleNextClick(); setIsRequiredField(true) }}>Next Step</button>

                        </div>
                    </div>

                </div>
            </div>

            <div className='flex justify-center mb-5'>
                <button className={`bg-primary px-8 py-4 text-white font-semibold text-[14px] leading-5 rounded-[4px]`} onClick={() => setIsHomePage()}>Go to Home Page</button>
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