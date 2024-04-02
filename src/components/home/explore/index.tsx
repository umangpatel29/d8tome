import React from 'react'
import ExploreHeader from './ExploreHeader'
import TradingVideos from './tradingVideos/tradingVideos'
import SwiperSlider from '@/components/home/explore/swiperSlider'

const Explore = () => {
    return (
        <div className='my-20'>
            <div>
                <div className='container mx-auto'>
                    <ExploreHeader />
                </div>
                <div className='mt-10 md:ml-44'>
                    <SwiperSlider />
                </div>
            </div>
            <div className='mt-5 md:ml-44'>
                <TradingVideos />
            </div>
        </div>
    )
}

export default Explore
