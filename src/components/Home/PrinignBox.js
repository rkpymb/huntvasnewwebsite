import React from 'react'
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import stylesMy from '../../../Styles/home.module.css'
import { HiCurrencyRupee } from "react-icons/hi2";

import EnqDialog from 'components/EnqDialog';

const HeroBox2 = () => {
    const BASE_URL = 'https://server.supermarks.in/img,jpg'
    return (
        <Box as="section" variant="section.workHard">
           
            <Container>
                <div className={stylesMy.Pricingbox}>
                    <div className={stylesMy.PricingboxA}>
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
                                <span>Premium access to Experts’ Resumes from Top Companies</span>
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
                                <span>Referrals reach outs from 7,500+ Industry Leaders</span>
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
                                <span>Premium access to all Soft-skills & Domain-skills Capstone Projects</span>
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
                                <span>Premium access to job portal - Shine/IIM Jobs</span>
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
                                <span>100,000+ min's of Career Hacks from Experts</span>
                            </div>
                        </div>
                    </div>
                    <div className={stylesMy.PricingboxB}>
                        <div className={stylesMy.PricingboxMain}>
                            <div className={stylesMy.Icontext}>
                                <HiCurrencyRupee size={30} />   <span>Program Fees:</span>
                            </div>
                            <div>
                              ₹ 2,49,999 /- + 10% CTC
                            </div>
                            <div>
                                <small>*Exam fee would be additional</small>
                            </div>
                            <div className={stylesMy.space20px}></div>
                            <EnqDialog Type={false} />
                        </div>
                    </div>
                </div>

              
            </Container>

            
        </Box>


    )
}

export default HeroBox2
