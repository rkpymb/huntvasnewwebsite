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
                                <h1><span className={stylesMy.mainColor} >Pro MBA</span> Program Eligibility Criteria?</h1>
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
                                    <span>Candidates must graduate from a university approved by UGC or any other qualification considered equivalent to graduation by the AIU.</span>
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
                                    <span>Perfect program for candidates Pursuing Graduation (in their last semester) or Graduates (Freshers and Working professionals)</span>
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
                                    <span>Those in the final year are also eligible for provisional admission. They must submit their marksheet/graduation certificate before the first sem</span>
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
                                    <span>Professionals with 0-3 years of Work Experience</span>
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
                                    <span>18-30 years of age (No Placement Assurance for above 30)</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={stylesMy.HeroBox2B}>
                        <div className={stylesMy.Herovideobox}>
                            <div className={stylesMy.HerfoBox2B}>
                                <img src='https://www.learnesl.net/wp-content/uploads/2021/10/10-Best-Daily-Activities-for-College-Students.jpg' />
                            </div>
                         
                        </div>
                    </div>
                </div>

              
            </Container>

            
        </Box>


    )
}

export default HeroBox2
