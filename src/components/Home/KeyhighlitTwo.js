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
                                <h1>What makes SmartThink <span className={stylesMy.mainColor} >Pro MBA</span> different from other programs?</h1>
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
                                    <span>Facilitates assured placement within 6 months of your training, allowing you to Earn while you Learn</span>
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
                                    <span>Offers an additional Diploma in Advanced Management from the State University of New York</span>
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
                                    <span>AICTE-approved training to enhance your credibility</span>
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

                        </div>

                    </div>
                    <div className={stylesMy.HeroBox2B}>
                        <div className={stylesMy.Herovideobox}>
                            <video autoPlay loop muted playsInline poster="/path/to/your/poster.jpg">
                                <source src="https://fmenew.sgp1.cdn.digitaloceanspaces.com/smartthink/smart%20think%20intro_1693120443455.mp4" type="video/mp4" />
                                {/* Add more <source> elements for different video formats if needed */}
                                Your browser does not support the video tag.
                            </video>
                            <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        video {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      `}</style>
                        </div>
                    </div>
                </div>

              
            </Container>

            
        </Box>


    )
}

export default HeroBox2
