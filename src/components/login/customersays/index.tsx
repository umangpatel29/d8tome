'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardData } from '@/constant/heroconstant';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CustomerSays = () => {

    return (
        <div className='container mx-auto mb-20'>
            <div className='flex gap-3 w-[45%] mx-auto flex-col'>
                <h1 className='text-center font-semibold text-[40px] leading-[60px]'>What our<span className='text-primary'> customer says</span></h1>
                <p className='text-center font-medium text-4 leading-6 text-[#8B8B8B]'>Sync movies and shows across your phone, Laptop and computer and easily access your favourites anywhere in the world</p>
            </div>
            <div className='relative flex justify-center mt-[50px]'>
                <Swiper
                    className="home-swiper"
                    speed={700}
                    effect={"slide"}
                    spaceBetween={15}
                    centeredSlides={true}
                    slidesPerView={3}
                    modules={[Pagination]}
                    loop
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 25
                        }
                    }}
                    pagination={{
                        clickable: true,
                        el: ".pagination-swiper",
                    }}
                    onInit={(swiper) => {
                        swiper?.navigation?.init();
                        swiper?.navigation?.update();
                    }}
                >
                    {CardData.map((item, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center mt-10 my-16">
                            <div className='rounded-2xl p-8 m-6 bg-white' style={{ boxShadow: '0 2px 15px rgba(0, 0, 0, 0.2)' }}>
                                <div className='flex flex-col'>
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt="not found"
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <p className='text-[18px] leding-[27px] mt-2 font-semibold'>{item.name}</p>
                                    <p className='text-3 font-normal leading-[18px] mt-1 text-[#939393]'>{item.subTitle}</p>
                                    <p className='mt-4 text-3 font-medium leading-[18px] text-[#939393]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet optio nisi repudiandae similique quae error culpa eos quod sapiente et nesciunt fuga totam autem, facere quibusdam ipsa voluptatem recusandae?</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='md:w-[50%] w-[90%] mx-auto h-full top-0 absolute z-0 rounded-xl bg-[#f693ac]'></div>
                <div className="pagination-swiper"></div>
            </div>
        </div>
    )
}

export default CustomerSays
