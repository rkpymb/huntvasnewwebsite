import React from 'react'
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import stylesMy from '../../../Styles/home.module.css'

import Link from 'next/link';


const HeroBox2 = () => {
    const BASE_URL = 'https://server.supermarks.in/img,jpg'
    return (
        <Box as="section" variant="section.workHard">

            <Container>
                <div className={stylesMy.HeroBox2}>
                    <div className={stylesMy.HeroBox2A}>
                        <div>
                            <div>
                                <h1>Key Highlights of the Program</h1>
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
                                    <span>100% Placement Assurance</span>
                                </div>
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
                                    <span>Earn 2 additional certificates at NO Additional Costs</span>
                                </div>
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
                                    <span>Eminent faculty from Academia & Industry</span>
                                </div>
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
                                    <span>Online library with access to books, journals, reports from World Bank, IMF, Harvard & Pearson</span>
                                </div>
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
                                    <span>Get a Featured Profile and Application Highlighter by Shine.com (leading job portal)</span>
                                </div>
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
                                    <span>Dedicated Educator for Doubts Clear</span>
                                </div>
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
                                    <span>Special invites to attend national level
                                        seminars/summits</span>
                                </div>
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
                                    <span>Live Online & Face-to-Face Workshop: 4 hrs each
                                        Total: 210 hrs of learning with 24*7 Help & Support </span>
                                </div>
                            </div>
                           
                        </div>

                    </div>
                    <div className={stylesMy.HeroBox2B}>
                        <img src='https://fmenew.sgp1.cdn.digitaloceanspaces.com/smartthink/Mask-Group-141290-1.png' />
                    </div>
                </div>


            </Container>


        </Box>


    )
}

export default HeroBox2
