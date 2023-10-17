import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import stylesMy from '../../../../Styles/home.module.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
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
                    <div className={stylesMy.ReviewImg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/D1.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={stylesMy.ReviewImg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/D2.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={stylesMy.ReviewImg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/D3-%E2%80%93-3.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </>
    );
}
