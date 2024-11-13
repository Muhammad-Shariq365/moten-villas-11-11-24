import React from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import ImageSlider from "../components/imageslider";
import Protfolio from './expertise';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <>
        {/* React Helmet for SEO */}
        <Helmet>
          <title>Top Builders & Developers in DHA Karachi | Moten Villas</title>
          <meta 
            name="description" 
            content="Looking for trusted builders and developers in DHA Karachi? Moten Villas offers residential and commercial property development with top-quality construction services."
          />
          <meta 
            name="keywords" 
            content="builders in DHA Karachi, property developers Karachi, construction services DHA, residential projects Karachi, commercial builders DHA"
          />
          <meta 
            property="og:title" 
            content="Top Builders & Developers in DHA Karachi | Moten Villas"
          />
          <meta 
            property="og:description" 
            content="Explore top residential and commercial construction services by Moten Villas, the leading builders and developers in DHA Karachi."
          />
          <meta 
            property="og:image" 
            content="https://i.postimg.cc/8Cz0Gmd5/Moten-Villas.png" 
          />
          <meta 
            property="og:url" 
            content="https://motenvillas.com" 
          />
          <meta 
            name="robots" 
            content="index, follow" 
          />
          <link 
            rel="canonical" 
            href="https://motenvillas.com" 
          />
        </Helmet>

        {/* Render your components */}
        <ImageSlider />
        <Protfolio />
      </>
    </div>
  );
};

export default Home;
