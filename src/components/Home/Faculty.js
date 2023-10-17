import React from 'react'
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import stylesMy from '../../../Styles/home.module.css'
import FacultySlider from './Part/FacultySlider'
import Link from 'next/link';


const HeroBox2 = () => {
    const BASE_URL = 'https://server.supermarks.in/img,jpg'
    return (
        <Box as="section" variant="section.workHard">

            <Container>
                <div className={stylesMy.ProcessBoxCenter}>
                    <div> <span className={stylesMy.gradienttext}>Meet Your Faculty</span></div>
                    <div style={{textAlign:'center',}}>This Program’s Teaching Staff consists of experienced trainers who have been/are working professionals from Global MNCs. They will help you become competent in the job market and equip you with Industry-Specific Skills.</div>
                </div>
                <div className={stylesMy.facBox}>
                    <div className={stylesMy.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117045.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                    <div className={stylesMy.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117044.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                           
                            layout="responsive"
                        />
                    </div>
                    <div className={stylesMy.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117052.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                    <div className={stylesMy.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117051.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                    <div className={stylesMy.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117050.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                   
                    <div className={stylesMy.Slideimg}>
                        <Image
                            src={`https://programs.expertrons.com/wp-content/uploads/2023/03/Group-117048.png`}
                            alt="Picture of the author"
                            width={'100%'}
                            height={100}
                            layout="responsive"
                        />
                    </div>
                   

               </div>
            </Container>


        </Box>


    )
}

export default HeroBox2
