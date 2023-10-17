import React from 'react';
import Imgae from 'next/image'
import stylesMy from '../../../Styles/home.module.css'
const Logo = ({ white, ...props }) => {
  return (
    <>
      <div className={stylesMy.LogoWebBox} >
        <img src="https://fmenew.sgp1.cdn.digitaloceanspaces.com/smartthink/smarthinkLogo.svg" alt="logo" className={stylesMy.LogoWebBox} />
      </div>     
      </>
  );
};

export default Logo;
