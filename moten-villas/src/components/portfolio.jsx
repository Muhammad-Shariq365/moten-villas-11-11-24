import React, { useState } from 'react';
import ProtfolioCard from "./protfolioCard";
import Ourwork from "./ourwork"
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const PortfolioImg = "https://i.postimg.cc/B6v06LFZ/IMG-8821-11zon.jpg";

  return (
    <div className="overflow-x-hidden mb-24">
      <Helmet>
        <link rel="preload" href={PortfolioImg} as="image" />
      </Helmet>
      <div className="relative w-screen h-[40vh] sm:h-[70vh] object-cover bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex justify-center items-center">
            <span>Loading...</span>
          </div>
        )}

        <img
          src={PortfolioImg}
          alt="Portfolio"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full ${imageLoaded ? 'animate-zoomIn' : 'opacity-0'} transition-opacity duration-1000`}
        />

        {imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl sm:text-8xl font-bold text-black bg-white bg-opacity-50 p-4 animate-borderAnimation">
            Portfolio
          </h1>
        </div>
        )}

        <style jsx>{`
          @keyframes zoomIn {
            from {
              transform: scale(1.2);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes borderAnimation {
            0% {
              border-color: transparent; /* Initially invisible */
            }
            25% {
              border-top-color: black;  /* Slowly appear top border */
            }
            50% {
              border-top-color: black;
              border-right-color: black; /* Right border appears */
            }
            75% {
              border-top-color: black;
              border-right-color: black;
              border-bottom-color: black; /* Bottom border appears */
            }
            100% {
              border-color: black; /* All borders are black */
            }
          }

          .animate-zoomIn {
            animation: zoomIn 1.2s ease-out forwards;
            will-change: transform, opacity;
          }

          .animate-borderAnimation {
            animation: borderAnimation 4s ease-in-out forwards;  /* Slow down the border animation duration */
            border-width: 4px;
            border-style: solid;
            border-color: transparent; /* Set initial border color to transparent */
          }
        `}</style>
      </div>
      <ProtfolioCard />
      <Ourwork/>
    </div>
  );
};

export default Portfolio;
