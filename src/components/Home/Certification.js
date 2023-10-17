import React from 'react'
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import stylesMy from '../../../Styles/home.module.css'
import CertSlider from './Part/CertSlider'
import Link from 'next/link';


const HeroBox2 = () => {
    const BASE_URL = 'https://server.supermarks.in/img,jpg'
    return (
        <Box as="section" variant="section.workHard">

            <Container>
                <div className={stylesMy.CertiBox}>
                    <div className={stylesMy.CertiBoxA}>
                        <div>
                            <div>
                                <h1><span className={stylesMy.mainColor} >Earn an Industry-renowned </span> Intensive Post Graduate Diploma in Banking and Financial Management Certification upon program completion </h1>
                            </div>
                            <div className={stylesMy.FeaturesItem}>
                                <div className={stylesMy.FeaturesItemImg}>
                                    <Image
                                        src={`https://fmenew.sgp1.cdn.digitaloceanspaces.com/smartthink/check.png`}
                                        alt="Picture of the author"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <div className={stylesMy.FeaturesItemText}>
                                    <span>Approved by AICTE, Ministry of HRD, Govt. of
                                        India</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={stylesMy.HeroBox2B}>
                        <CertSlider/>
                    </div>
                </div>


            </Container>


        </Box>


    )
}

export default HeroBox2
