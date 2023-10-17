/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Label,
  Image,
  Button,
} from 'theme-ui';
import Input from 'components/input';
import banner from 'assets/images/banner.png';
import paypal from 'assets/images/paypal.png';
import google from 'assets/images/google.png';
import dropbox from 'assets/images/dropbox.png';
import { rgba } from 'polished';
import stylesMy from '../../Styles/home.module.css'
import { FiAirplay, FiCheckSquare, FiBookOpen, FiRadio, FiCheckCircle } from "react-icons/fi";
const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <div className={stylesMy.ProcessBoxCenter}>
          <div> <span className={stylesMy.gradienttext}>How you will learn</span></div>
          <div>The learnings of this program have been ultra-effective in imparting industry knowledge & proficient skills to become the Leader of this field:</div>
        </div>
        <div className={stylesMy.space20px}></div>
        <div className={stylesMy.ProcessBoxCenterItemBox}>
          <div className={stylesMy.ProcessBoxCenterItem}>
            <div>
              <FiAirplay size={50}/>
            </div>
            <div>
              <span>Live Online interactive sessions</span>
            </div>
          </div>
          <div className={stylesMy.ProcessBoxCenterItem}>
            <div>
              <FiCheckSquare size={50}/>
            </div>
            <div>
              <span>24x7 access
                to LMS</span>
            </div>
          </div>
          <div className={stylesMy.ProcessBoxCenterItem}>
            <div>
              <FiBookOpen size={50}/>
            </div>
            <div>
              <span>E-Content from
                Library</span>
            </div>
          </div>
          <div className={stylesMy.ProcessBoxCenterItem}>
            <div>
              <FiRadio size={50}/>
            </div>
            <div>
              <span>Live Online interactive sessions</span>
            </div>
          </div>
        </div>

        <div className={stylesMy.space20px}></div>
        <div className={stylesMy.HeadlineCenterBox}>
          <div>
            <span className={stylesMy.gradienttext}>Unlock endless possibilities, and chart your own unique career path!</span>
          </div>
        </div>
        <div className={stylesMy.space20px}></div>
        
        <div className={stylesMy.PTagsBox}>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Commercial Banking</div>
          </div>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Investment Banking</div>
          </div>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Corporate Finance</div>
          </div>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Asset Management</div>
          </div>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Risk Management</div>
          </div>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Financial Consulting</div>
          </div>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Portfolio Manager</div>
          </div>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Insurance</div>
          </div>
          <div className={stylesMy.PTagsItem}>
            <div className={stylesMy.PTagsItemicon}><FiCheckCircle /></div>
            <div className={stylesMy.PTagsItemText}>Treasury and Cash Management</div>
          </div>
        </div>

       
        
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: ['block', null, null, null, 'grid', 'flex'],
    gridTemplateColumns: ['1fr 1fr', null, null, null, '0.9fr 1.1fr'],
    gap: [0, 0, 0, 0, 40],
    alignItems: 'center',
    minHeight: [null, null, '100vh', '70vh', '50vh', '100vh'],
    pt: ['100px', null, null, '130px', '25px', null, 0],
    textAlign: ['center', null, 'left'],
  },
  content: {
    maxWidth: [null, null, null, '75%', '100%'],
    margin: [null, null, null, '0 auto', 0],
    textAlign: [null, null, null, 'center', 'left'],
    h1: {
      color: 'textSecondary',
      fontFamily: 'Crimson Text, Serif',
      fontWeight: 600,
      fontSize: ['34px', '34px', '34px', '44px', '40px', '49px', '62px'],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
    },
    p: {
      maxWidth: [450, null, null, 'none', 450],
      fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      mt: ['25px', null, null, null, 4],
    },
  },
  subscribe: {
    display: 'flex',
    alignItems: 'center',
    mt: ['30px'],
    input: {
      mr: ['15px'],
      minHeight: ['45px', null, null, 60, 50, null, 60],
    },
    button: {
      minHeight: ['45px', null, null, 60, 50, null, 60],
      fontSize: ['14px', '14px', '16px'],
    },
  },
  sponsoredBy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, null, 'unset'],
    mt: ['30px', '30px', '40px', '40px', '30px'],
    span: {
      color: rgba('#566272', 0.6),
      fontSize: ['14px', '16px', '16px'],
    },
  },
  logos: {
    display: 'flex',
    alignItems: 'center',
    figure: {
      ml: ['10px', '16px', '28px', '16px', '16px'],
    },
    img: {
      maxWidth: ['69px', '85px', '100%', '100%', '79px', '100px', '100%'],
    },
  },
  illustration: {
    ml: [0, 0, '30px', 0, 0],
    mt: ['50px', null, null, null, 0],
    minWidth: ['auto', null, null, null, null, '600px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['100%', null, null, '80%', '100%'],
    },
  },
};
