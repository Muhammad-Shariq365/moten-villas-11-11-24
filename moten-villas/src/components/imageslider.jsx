import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import Image1 from '../assets/banglow1.jpg';
import Image2 from '../assets/banglow2.jpg';
import Image3 from '../assets/banglow3.jpg';

const images = [Image1, Image2, Image3];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
      setIsLoaded(true);
    };
    preloadImages();
  }, []);

  const transitions = useTransition(isLoaded ? index : 0, {
    from: { opacity: 0, transform: 'scale(0.9)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(1.1)' },
    config: { duration: 700 },
    keys: index,
  });

  useEffect(() => {
    if (isLoaded) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  return (
    <div className="relative  h-[50vh] sm:h-[calc(100vh-65px)] w-screen overflow-hidden">
      {transitions((style, i) => (
        <animated.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            ...style,
            overflow: 'hidden',
          }}
        >
          <img
            src={images[i]}
            alt={`Slide ${i}`}
            className="h-full w-full object-fit"
          />
        </animated.div>
      ))}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        {/* Outer border */}
        <div className="bg-gray-500 bg-opacity-40 border-8 border-gradient p-2 rounded-lg relative">
          {/* Inner border */}
          <div className="border-8 border-white p-4 relative z-20">
            <h1 className="text-[clamp(24px,5vw,45px)] font-bold text-gray-900 p-4 text-shadow">
              BEYOND EXPECTATIONS
            </h1>
            <h2 className="text-[clamp(24px,5vw,45px)] font-bold text-orange-500 text-shadow">
              We Turn Your Vision into Reality
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(to right, #e67e22, #d35400) 1;
        }

        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .border-gradient {
            border-width: 4px; /* Smaller border on smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
