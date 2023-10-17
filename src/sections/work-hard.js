/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';

import stylesMy from '../../Styles/home.module.css'
import Marquee from "react-fast-marquee";
import { MdVerifiedUser, MdRocketLaunch } from "react-icons/md";
const WorkHard = () => {
  const Download = () => {
    const BroucherURL = 'https://fmenew.sgp1.cdn.digitaloceanspaces.com/smartthink/SmartThink_Expertrons_Pro_MBA.pdf'
    window.open(BroucherURL, '_blank');
  }
  return (
    <Box as="section" variant="section.workHard">
      <Container>
        
        <div className={stylesMy.ProductHero}>

          <Box sx={styles.contentWrapper}>
            <Box sx={styles.rightContent}>
              <div className={stylesMy.ProMbaBoxBPgboxA}>
                <h1>
                  <span className={stylesMy.gradienttextPro}>Pro MBA</span> in Banking and Financial Management with Assured Placement
                </h1>
                <span>Join our <span style={{ color: 'blue' }}>Pro MBA Program</span> and get your Dream Job with highest Salary hike</span>
              </div>

              <div className={stylesMy.ProMbaBoxBPgboxAListitem}>
                <div className={stylesMy.gradienttextProList}>
                  <li>PG Diploma approved by AICTE, Govt of India</li>
                  <li>Learning materials from World Bank, IMF, Harvard & Pearson</li>
                  <li>3 Industry-recognized certifications from State University of New York, AIMA and Kotak Mahindra Bank</li>
                  <li>Gain work experience in the BFSI industry while learning</li>
                </div>

              </div>
              <div className={stylesMy.tagbox}>
                <div className={stylesMy.tagItem}>
                  <MdVerifiedUser className={stylesMy.tagItemIcon}/>
                  <div className={stylesMy.tagItemText}>
                    <span>100% job Assurance</span>
                  </div>
                </div>
                <div className={stylesMy.tagItem2}>
                  <MdRocketLaunch className={stylesMy.tagItemIcon}/>
                  <div className={stylesMy.tagItemText}>
                    <span>100% job Assistance</span>
                  </div>
                </div>
              </div>
              <Box sx={styles.learnMore}>
                <LearnMore label="Download Brouchers for Explore more" path="#!" onClick={Download} />
              </Box>
            </Box>
            <Box sx={styles.s}>
              <Image src={`https://www.axisbank.com/annual-report-2015-2016/images/slide-4.jpg`} alt="workHard" className={stylesMy.ProMbaBoxBPgboxBImg} />
            </Box>
          </Box>
          
        </div>
        
        <div className={stylesMy.MarqueeBodx}>
          <Marquee
            gradient
            gradientColor={[255, 255, 255]}
          >
            <div>
              <Image src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116329.svg`} alt="banner" />
            </div>
            <div>
              <Image src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116342.svg`} alt="banner" />
            </div>
            <div>
              <Image src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116340.svg`} alt="banner" />
            </div>
            <div>
              <Image src={`https://programs.expertrons.com/wp-content/uploads/2023/08/D1.png`} alt="banner" />
            </div>
            <div>
              <Image src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116335.svg`} alt="banner" />
            </div>
            <div>
              <Image src={`https://programs.expertrons.com/wp-content/uploads/2023/06/D.png`} alt="banner" />
            </div>
          </Marquee>
        </div>
      </Container>
    </Box>
  );
};

export default WorkHard;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['none', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', '24px', null, '36px', '31px', '35px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', null, null, '30px', null, null, '100%'],
      top: ['4px', '8px'],
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  learnMore: {
    mt: [4],
    ml: [20, null, null, 0],
    textAlign: [null, null, null, 'center', 'left'],
  },
  illustration: {
    mb: ['50px', '50px', 0],
    mt: [0, 0, 0, '50px', 0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['100%', null, null, '80%', '100%'],
    },
  },
};
