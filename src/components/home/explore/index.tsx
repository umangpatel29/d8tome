import React from 'react'
import ExploreHeader from './ExploreHeader'
import TradingVideos from './tradingVideos/tradingVideos'
import SwiperSlider from '@/components/home/explore/swiperSlider'

const Explore = () => {
    return (
        <div className='my-20'>
            <div>
                <div className='container px-3 md:px-0 mx-auto'>
                    <ExploreHeader />
                </div>
                <div className='md:mt-20 mt-5 pl-4 md:p-0 md:ml-44'>
                    <SwiperSlider />
                </div>
            </div>
            <div className='md:mt-20 mt-5 pl-4 md:p-0 md:ml-44'>
                <TradingVideos />
            </div>
        </div>
    )
}

export default Explore
