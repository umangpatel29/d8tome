"use client"
import React, { useEffect } from 'react'
import BirthdatePicker from './datepicker'
import { CreateAccountType } from '@/types/createaccounttype/createaccounttype'
import { FormikProps } from 'formik'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '@/context/useContext';

interface StepOneProps {
  formik: FormikProps<CreateAccountType>;
  handleStepClick: (step: number) => void;
  isRequiredField: boolean
}

const StepOne: React.FC<StepOneProps> = ({ formik, handleStepClick, isRequiredField }) => {

  const { values, setFieldValue } = formik;

  // const { email } = useUser()
  let email: any
  if (typeof window !== 'undefined') {
    email = localStorage.getItem('email');
    // Set email value in Formik
  }
  useEffect(() => {
    setFieldValue('email', email);
  }, []);
  console.log(email)
  console.log(formik.errors.firstname)
  console.log(isRequiredField)
  return (
    <div>
      <div>
        <h1 className='font-bold text-[24px] leading-[35px] text-center md:text-start'>Contact details</h1>
        <p className='font-normal text-[18px] leading-[30px] text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisc.</p>
      </div>

      <div className='w-full flex flex-col gap-7 mt-7'>
        <div className='grid gap-x-3 md:grid-cols-2'>
          <div className=''>
            <p className='font-semibold text-[18px] leading-[20px] text-[#3A3A3A]'>First Name*</p>
            <div className={`mt-2 ${isRequiredField && !formik.values.firstname && 'border border-red-500 rounded-md '}`}>
              <input type="text" id='firstname' name='firstname' placeholder='First name' className='py-3 rounded-md  border w-full px-3'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
              />
            </div>
            {isRequiredField && !formik.values.firstname && <div className='text-red-500 text-sm'>Required</div>}
          </div>
          <div className=''>
            <p className='font-semibold text-[18px] leading-[20px] text-[#3A3A3A]'>Last Name*</p>
            <div className={`mt-2 ${isRequiredField && !formik.values.lastname && 'border border-red-500 rounded-md '}`}>
              <input type="text" name='lastname' placeholder='Last name' className='py-3 rounded-md  border w-full px-3'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
            </div>
            {isRequiredField && !formik.values.lastname && <div className='text-red-500 text-sm'>Required</div>}
          </div>
        </div>
        <div className=''>
          <p className='font-semibold text-[18px] leading-[20px] text-[#3A3A3A]'>Email Address*</p>
          <div className={`mt-2 rounded-md`}>
            <div contentEditable="false" className='py-3 rounded-md  border w-full px-3 text-[#9CA3AF]'>
              {email}
            </div>
            {/* <input contentEditable=" type="email" name='email' placeholder='Email' className='py-3 rounded-md  border w-full px-3'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            /> */}
          </div>
          {(isRequiredField && (formik.errors.email || !formik.values.email)) && <div className='text-red-500 text-sm'>{formik.errors.email || "Required"}</div>}
        </div>
        <div>
          <p className='font-semibold text-[18px] leading-[20px]'>Birthday</p>
          <div className='mt-2'>
            <BirthdatePicker formik={formik} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne