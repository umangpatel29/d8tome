import React from 'react'
import BirthdatePicker from './datepicker'
import { CreateAccountType } from '@/types/createaccounttype/createaccounttype'
import { FormikProps } from 'formik';


interface StepOneProps {
  formik: FormikProps<CreateAccountType>;
}

const StepOne: React.FC<StepOneProps> = ({ formik }) => {
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
            <div className={`mt-1 ${formik.errors.firstname && formik.touched.firstname && 'border border-red-500 rounded-md '}`}>
              <input type="text" id='firstname' name='firstname' placeholder='FirstName' className='py-3 rounded-md  border w-full px-3'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
              />
            </div>
            {formik.errors.firstname && formik.touched.firstname && <div className='text-red-500 text-sm'>{formik.errors.firstname}</div>}
          </div>
          <div className=''>
            <p className='font-semibold text-[18px] leading-[20px] text-[#3A3A3A]'>Last Name*</p>
            <div className={`mt-1 ${formik.errors.lastname && formik.touched.lastname && 'border border-red-500 rounded-md '}`}>
              <input type="text" name='lastname' placeholder='lastname' className='py-3 rounded-md  border w-full px-3'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
            </div>
            {formik.errors.lastname && formik.touched.lastname && <div className='text-red-500 text-sm'>{formik.errors.lastname}</div>}
          </div>
        </div>
        <div className=''>
          <p className='font-semibold text-[18px] leading-[20px] text-[#3A3A3A]'>Email Address*</p>
          <div className={`mt-1 ${formik.errors.email && formik.touched.email && 'border border-red-500 rounded-md '}`}>
            <input type="email" name='email' placeholder='email' className='py-3 rounded-md  border w-full px-3'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email && formik.touched.email && <div className='text-red-500 text-sm'>{formik.errors.email}</div>}
        </div>
        <div>
          <p className='font-semibold text-[18px] leading-[20px]'>Birthday</p>
          <div className='mt-1'>
            <BirthdatePicker />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne
