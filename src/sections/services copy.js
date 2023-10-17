/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import stylesMy from '../../Styles/home.module.css'
import individual from 'assets/images/icons/individual.png';
import team from 'assets/images/icons/team.png';
import org from 'assets/images/icons/org.png';
import Marquee from "react-fast-marquee";
const data = [
  {
    id: 1,
    icon: individual,
    title: 'For Individuals',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 2,
    icon: team,
    title: 'For Team',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 3,
    icon: org,
    title: 'For Organization',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <div className={stylesMy.CenterBox}>
          <span className={stylesMy.gradienttextH1}>Successful Career start with first step forward</span>
          <span>Join our <span style={{ color: 'blue' }}>Pro MBA Program</span> and get your Dream Job with highest Salary hike</span>
        </div>

        <div className={stylesMy.ProMbaBox}>
          <div className={stylesMy.ProMbaBoxA}>


            <div className={stylesMy.ProMbaBoxBPgbox}>
             <div className={stylesMy.ProMbaBoxBPgboxA}>
                <h1>
                  <span className={stylesMy.gradienttextPro}>Pro MBA</span> in Banking and Financial Management with Assured Placement</h1>
                <span>Join our <span style={{ color: 'blue' }}>Pro MBA Program</span> and get your Dream Job with highest Salary hike</span>

                <div className={stylesMy.gradienttextProList}>
                  <li>PG Diploma approved by AICTE, Govt of India</li>
                  <li>Learning materials from World Bank, IMF, Harvard & Pearson</li>
                  <li>3 Industry-recognized certifications from State University of New York, AIMA and Kotak Mahindra Bank</li>
                  <li>Gain work experience in the BFSI industry while learning</li>
                </div>

              </div>
              <div className={stylesMy.ProMbaBoxBPgboxB}>
                <Image src={`https://www.axisbank.com/annual-report-2015-2016/images/slide-4.jpg`} className={stylesMy.ProMbaBoxBPgboxBImg} alt="banner" />
              </div>
            </div>
          </div>

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

export default Services;

const styles = {
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'left', 'left', 'center', 'left'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
