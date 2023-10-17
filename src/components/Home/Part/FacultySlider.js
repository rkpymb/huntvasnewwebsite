import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Mystyle from '../../../../Styles/home.module.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={5}
                slidesPerView={3}
                slidesPerGroup={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                
            >
                <SwiperSlide>
                    <div className={Mystyle.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117045.png`}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                            object-fit= "cover"
                           layout="responsive"
                        />
                    </div>
                   
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Mystyle.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117044.png`}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Mystyle.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117051.png`}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                           layout="responsive"
                        />
                    </div>
                    
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className={Mystyle.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117050.png`}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                           layout="responsive"
                        />
                    </div>
                   
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Mystyle.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117048.png`}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                           layout="responsive"
                        />
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Mystyle.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117045.png`}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                           layout="responsive"
                        />
                    </div>
                   
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
