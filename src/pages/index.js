import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import EnqDialog from 'components/EnqDialog';
import Banner from 'sections/banner';
import Process from 'sections/Process';
import ItemboxThree from 'sections/ItemboxThree';
import Services from 'sections/services';
import ExcitingFeatures from 'sections/exciting-features';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';
import HappyCustomer from 'sections/happy-customer';
import Blog from 'sections/blog';
import SubscribeUs from 'sections/subscribe-us';
import Keyhighlit from 'components/Home/Keyhighlit'
import KeyhighlitTwo from 'components/Home/KeyhighlitTwo'
import Curriculum from 'components/Home/Curriculum'
import Certification from 'components/Home/Certification'
import Faculty from 'components/Home/Faculty'
import Eligibility from 'components/Home/Eligibility'
import PrinignBox from 'components/Home/PrinignBox'
import Testimonials from 'components/Home/Testimonials'
import MbaFnq from 'components/Home/MbaFnq'
import FooterWithBtn from 'components/Home/FooterWithBtn'
import Expertrons from 'components/Expertrons'
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Post graduate diploma in Banking and Finance | SmartThink"
          description="SmartThink offer post graduate diploma in Banking and Finance | Powered by AIMA | Approved by AICTE, Gov of India with 100% placement assurance, Enroll now!"
        />
       
        <WorkHard />
        <Keyhighlit />
        
        {/* <Banner /> */}
        <Process />
        <KeyhighlitTwo />
        <Curriculum />
        <Expertrons />
        <Certification />
        <Faculty />
        <Eligibility />
        <PrinignBox />
        <Testimonials />
        <MbaFnq />
        <EnqDialog Type={true} />
        <FooterWithBtn />
        
        {/* <ExcitingFeatures /> */}
      
      
      </Layout>
    
    </ThemeProvider>
  );
}
