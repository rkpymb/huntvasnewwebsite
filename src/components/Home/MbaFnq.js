import React from 'react'
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import stylesMy from '../../../Styles/home.module.css'
import { HiCurrencyRupee } from "react-icons/hi2";
import Link from 'next/link';

import FnqAcc from './Part/FnqAcc'
const HeroBox2 = () => {
    const BASE_URL = 'https://server.supermarks.in/img,jpg'
    return (
        <Box as="section" variant="section.workHard">
           
            <Container>
                <div className={stylesMy.HeadlineCenterBox}>
                    <div>
                        <span className={stylesMy.gradienttext}>Got questions? Get them answered here!</span>
                    </div>
                </div>
                <div className={stylesMy.space20px}></div>
                <FnqAcc/>
            </Container>

            
        </Box>


    )
}

export default HeroBox2
