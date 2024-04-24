import { CreateAccountType } from '@/types/createaccounttype/createaccounttype';
import { FormikProps } from 'formik';
import React, { useState, useEffect, useRef } from 'react';

interface formikvaluesType {
    formik: FormikProps<CreateAccountType>;
}
const BirthdatePicker: React.FC<formikvaluesType> = ({ formik }) => {
    const [showDayDropdown, setShowDayDropdown] = useState<boolean>(false);
    const [showMonthDropdown, setShowMonthDropdown] = useState<boolean>(false);
    const [showYearDropdown, setShowYearDropdown] = useState<boolean>(false);
    const [day, setDay] = useState<string>('0');
    const [month, setMonth] = useState<string>('0');
    const [year, setYear] = useState<string>('0');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const days: number[] = Array.from({ length: 31 }, (_, index) => index + 1);
    const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
    const currentYear = new Date().getFullYear();
    const years: number[] = Array.from({ length: 35 }, (_, index) => currentYear - index - 16);

    const handleDayClick = () => {
        setShowDayDropdown(!showDayDropdown);
        setShowMonthDropdown(false);
        setShowYearDropdown(false);
    };

    const handleMonthClick = () => {
        setShowMonthDropdown(!showMonthDropdown);
        setShowDayDropdown(false);
        setShowYearDropdown(false);
    };

    const handleYearClick = () => {
        setShowYearDropdown(!showYearDropdown);
        setShowDayDropdown(false);
        setShowMonthDropdown(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDayDropdown(false);
                setShowMonthDropdown(false);
                setShowYearDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    useEffect(() => {
        if (formik.values.DOB !== '') {
            const DOB = formik.values.DOB;
            const dateObject = new Date(DOB);
            const day = dateObject.getUTCDate().toString().padStart(2, '0');
            const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
            const year = dateObject.getUTCFullYear().toString();

            setDay(day);
            setMonth(month);
            setYear(year);
        }
    }, [formik.values.DOB]);

    useEffect(() => {
        if (year !== '0' && month !== '0' && day !== '0') {
            const currentDate = new Date();
            const time = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}.${currentDate.getMilliseconds().toString().padStart(3, '0')}`;
            const dateTime = `${year}-${month}-${day}T${time}Z`;
            formik.setFieldValue('DOB', dateTime)
        }
        setShowYearDropdown(false);
        setShowMonthDropdown(false);
        setShowDayDropdown(false)

    }, [day, month, year])

    return (
        <div>
            <div className="flex gap-5 relative">

                <div className='relative'>
                    <div className='p-3 w-[100px] border rounded-md cursor-pointer relative'>

                        <input
                            type="text"
                            placeholder="MM"
                            onClick={handleMonthClick}
                            value={month !== '0' ? month : 'MM'}
                            readOnly
                            className='w-full'
                        />
                    </div>

                    {showMonthDropdown && (
                        <div ref={dropdownRef} className="custom-scroll border cursor-pointer absolute top-[40px] left-0 bg-white shadow-md" style={{ height: '200px', width: '100px', overflowY: 'auto' }}>
                            {months.map((month) => (
                                <div key={month} onClick={() => setMonth(month.toString().padStart(2, '0'))} className='px-2'>
                                    {month.toString().padStart(2, '0')}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='relative'>
                    <div className='p-3 w-[100px] border rounded-md cursor-pointer relative'>
                        <input
                            type="text"
                            placeholder="Day"
                            onClick={handleDayClick}
                            value={day !== '0' ? day : 'Day'}
                            readOnly
                            className='w-full'
                        />
                    </div>

                    {showDayDropdown && (
                        <div ref={dropdownRef} className="custom-scroll border cursor-pointer absolute top-[40px] left-0 bg-white shadow-md" style={{ height: '200px', width: '100px', overflowY: 'auto' }}>
                            {days.map((day) => (
                                <div key={day} onClick={() => setDay(day.toString().padStart(2, '0'))} className='px-2'>
                                    {day.toString().padStart(2, '0')}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='relative'>
                    <div className='p-3 w-[100px] border rounded-md cursor-pointer relative'>
                        <input
                            type="text"
                            placeholder="YYYY"
                            onClick={handleYearClick}
                            value={year !== '0' ? year : 'YYYY'}
                            readOnly
                            className='w-full'
                        />
                    </div>

                    {showYearDropdown && (
                        <div ref={dropdownRef} className="custom-scroll border cursor-pointer absolute top-[50px] left-0 bg-white shadow-md" style={{ height: '200px', width: '100px', overflowY: 'auto' }}>
                            {years.map((year) => (
                                <div key={year} onClick={() => setYear(year.toString())} className='px-2'>
                                    {year.toString()}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BirthdatePicker;
