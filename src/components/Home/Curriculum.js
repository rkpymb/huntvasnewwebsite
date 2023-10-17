import React from 'react'
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import stylesMy from '../../../Styles/home.module.css'
import CurriculumAccordion from '../Home/Part/CurriculumAccordion'
import { FiClock } from "react-icons/fi";
const HeroBox2 = () => {
    const BASE_URL = 'https://server.supermarks.in/img,jpg'
    return (
        <Box as="section" variant="section.workHard">
           
            <Container>
                <div className={stylesMy.HeadlineCenterBoxFlex}>
                    <div>
                        <span className={stylesMy.gradienttext}>Program Curriculum:</span>
                    </div>
                    <div className={stylesMy.Durationbox}>
                        <div className={stylesMy.DurationboxA}>
                            <FiClock />
                        </div>
                        <div className={stylesMy.DurationboxB}>
                            <span className={stylesMy.gradienttext}>Program Duration: <span className={stylesMy.mainColor}>2 years</span></span>
                        </div>
                    </div>
                </div>
                <div className={stylesMy.space20px}></div>
                <CurriculumAccordion/>

              
            </Container>

            
        </Box>


    )
}

export default HeroBox2
