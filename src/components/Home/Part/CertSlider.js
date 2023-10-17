import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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
                    <Image
                        src={`https://fmenew.sgp1.cdn.digitaloceanspaces.com/smartthink/duyvgdyvsy.jpg`}
                        alt="Picture of the author"
                        width={20}
                        height={20}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`https://fmenew.sgp1.cdn.digitaloceanspaces.com/smartthink/bvgvg.jpg`}
                        alt="Picture of the author"
                        width={20}
                        height={20}
                    />
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
