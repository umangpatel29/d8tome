"use client";
import { CreateAccountType } from "@/types/createaccounttype/createaccounttype";
import { FormikProps } from "formik";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";

interface StepOneProps {
    formik: FormikProps<CreateAccountType>
}

const StepThree = ({ formik }: StepOneProps) => {

    const { values, setFieldValue } = formik;

    const [fileStates, setFileStates] = useState<
        Array<{ file: File; url: string }[]>
    >([]);

    const getImageBlob = (file: File) => {
        return URL.createObjectURL(file);
    };

    const onDrop = (acceptedFiles: File[], divIndex: number) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFileStates((prevState) => {
                const newState = [...prevState];
                let error = false;
                if (newState[divIndex]?.length + acceptedFiles.length > 10) {
                    error = true;
                } else {
                    newState[divIndex] = [
                        ...(newState[divIndex] || []),
                        ...acceptedFiles.map((file) => ({ file, url: getImageBlob(file) })),
                    ];
                }
                if (error) {
                    console.log(error, "error>>");
                }
                return newState;
            });
        }
    };

    const handleDelete = (divIndex: number, index: number) => {
        setFileStates((prevState) => {
            const newState = [...prevState];
            newState[divIndex] = newState[divIndex].filter((_, i) => i !== index);
            return newState;
        });
    };

    useEffect(() => {
        const storedData = localStorage.getItem('profilephotos');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (parsedData.length > 0) {
                setFileStates(parsedData);
            }
        }
    }, []);

    useEffect(() => {
        const newArray = fileStates.filter(item => Array.isArray(item) && item.length > 0);
        localStorage.setItem('profilephotos', JSON.stringify(newArray));
        setFieldValue('profilephotos', newArray);
    }, [fileStates]);


    return (
        // <div className="w-full h-[calc(100vh-90px)] flex justify-center items-center">
        //   <div className="w-[834px] h-[834px] shadow-lg p-[87px] pt-[58px]">
        <>
            <div className="flex flex-col justify-start items-center w-full gap-10">
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <h2 className="text-[#2D262E] font-poppins font-bold text-[24px] leading-[35px]">
                        Profile Photo
                    </h2>
                    <p className="text-[#7F7F7F] font-poppins font-normal text-[18px] leading-[30px]">
                        Lorem ipsum dolor sit amet consectetur adipisc.
                    </p>
                </div>
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, divIndex) => (
                        <div key={divIndex}>
                            {fileStates[divIndex]?.length > 0 ? (
                                fileStates[divIndex].map(({ url }, index) => (
                                    <div
                                        className="relative h-[224px] bg-white border border-[#CDCDCD] rounded-lg shadow-profile-photo"
                                        key={index}
                                    >
                                        <div
                                            className="absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white dark:bg-dark-medium"
                                            onClick={() => handleDelete(divIndex, index)}
                                        >
                                            <Image
                                                src={"/svg/trash.svg"}
                                                alt="trash.svg"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                        <Image
                                            src={url}
                                            alt="not found"
                                            width={204}
                                            height={224}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="h-[224px] bg-white border border-[#CDCDCD] rounded-lg flex justify-center items-center">
                                    <Dropzone
                                        onDrop={(acceptedFiles) => onDrop(acceptedFiles, divIndex)}
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <button type="button" className="w-16 h-16">
                                                    <Image
                                                        src={"/svg/upload.svg"}
                                                        width={64}
                                                        height={64}
                                                        alt={"image"}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </button>
                                            </div>
                                        )}
                                    </Dropzone>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-center font-poppins font-normal text-[14px] leading-[21px] text-[#7F7F7F] mt-[33px]">
                Add at least 2 photos to Continue
            </p>
        </>
        //   </div>
        // </div>
    );
};
export default StepThree;
