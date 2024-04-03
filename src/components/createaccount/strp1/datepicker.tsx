import React, { useState, useEffect, useRef } from 'react';

const BirthdatePicker: React.FC = () => {
    const [showDayDropdown, setShowDayDropdown] = useState<boolean>(false);
    const [showMonthDropdown, setShowMonthDropdown] = useState<boolean>(false);
    const [showYearDropdown, setShowYearDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const days: number[] = Array.from({ length: 31 }, (_, index) => index + 1);
    const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
    const years: number[] = Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index);

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

    return (
        <div>
            <div className="flex gap-5 relative">

                <div className='relative'>
                    <div className='p-3 w-[100px] border rounded-md cursor-pointer relative'>

                        <input
                            type="text"
                            placeholder="MM"
                            onClick={handleMonthClick}
                            value={showMonthDropdown ? '' : 'MM'}
                            readOnly
                            className='w-full'
                        />
                    </div>

                    {showMonthDropdown && (
                        <div ref={dropdownRef} className="border cursor-pointer absolute top-[40px] left-0 bg-white shadow-md" style={{ height: '200px', width: '100px', overflowY: 'auto' }}>
                            {months.map((month) => (
                                <div key={month} onClick={() => console.log(`Month selected: ${month}`)} className='px-2'>
                                    {month}
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
                            value={showDayDropdown ? '' : 'Day'}
                            readOnly
                            className='w-full'
                        />
                    </div>

                    {showDayDropdown && (
                        <div ref={dropdownRef} className="border cursor-pointer absolute top-[40px] left-0 bg-white shadow-md" style={{ height: '200px', width: '100px', overflowY: 'auto' }}>
                            {days.map((day) => (
                                <div key={day} onClick={() => console.log(`Day selected: ${day}`)} className='px-2'>
                                    {day}
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
                            value={showYearDropdown ? '' : 'YYYY'}
                            readOnly
                            className='w-full'
                        />
                    </div>

                    {showYearDropdown && (
                        <div ref={dropdownRef} className="border cursor-pointer absolute top-[50px] left-0 bg-white shadow-md" style={{ height: '200px', width: '100px', overflowY: 'auto' }}>
                            {years.map((year) => (
                                <div key={year} onClick={() => console.log(`Year selected: ${year}`)} className='px-2'>
                                    {year}
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
