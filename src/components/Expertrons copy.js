import React from 'react'
import stylesMy from '../../Styles/home.module.css'
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import { LearnMore } from 'components/link';
const Expertrons = () => {

    const Download = () => {
        const BroucherURL = 'https://www.expertrons.com/'
        window.open(BroucherURL, '_blank');
    }
  return (
    <>
          <div className={stylesMy.ExpertronsBox}>
              <div className={stylesMy.ExpertronsBoB}>
                  <Image width={300} src={`https://www.expertrons.com/wp-content/uploads/2023/04/logo.svg`} alt="banner" />
              </div>
              <div className={stylesMy.ExpertronsBoxA}>
                  <span>Academic Training and Placement partner</span> 
              </div>
              <Box sx={styles.learnMore}>
                  <LearnMore label="Visit Expertrons Website" path="#!" onClick={Download} />
              </Box>
              
          </div>
    </>
  )
}

export default Expertrons

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

