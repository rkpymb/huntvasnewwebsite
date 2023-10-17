import React from 'react';
import stylesMy from '../../styles/home.module.css'
const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
