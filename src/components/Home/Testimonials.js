import React from 'react'
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import stylesMy from '../../../Styles/home.module.css'
import { HiCurrencyRupee } from "react-icons/hi2";
import Link from 'next/link';

import TestimonialsSlider from './Part/TestimonialsSlider'
import TestimonialsSliderMobile from './Part/TestimonialsSliderMobile'
const HeroBox2 = () => {
    const BASE_URL = 'https://server.supermarks.in/img,jpg'
    return (
        <Box as="section" variant="section.workHard">
           
            <Container>
                <div className={stylesMy.HeadlineCenterBox}>
                    <div>
                        <span className={stylesMy.gradienttext}>Testimonials</span>
                    </div>
                </div>
                <div className={stylesMy.OnlyDestop} >
                    <TestimonialsSlider />
                </div>
                <div className={stylesMy.OnlyMobile} >
                    <TestimonialsSliderMobile />
                </div>
               
            </Container>

            
        </Box>


    )
}

export default HeroBox2
