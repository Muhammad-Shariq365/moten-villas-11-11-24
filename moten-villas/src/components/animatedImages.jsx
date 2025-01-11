// AnimatedImages.js
import React, { useEffect, useRef, useState } from 'react';

const AnimatedImages = () => {
  const [visibleHeadings, setVisibleHeadings] = useState([false, false, false]);
  const headingRefs = useRef([]);

  const handleScroll = () => {
    const newVisibleHeadings = headingRefs.current.map((ref, index) => {
      if (ref && !visibleHeadings[index]) { // Only check if it's not already visible
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          return true; // Mark as visible
        }
      }
      return visibleHeadings[index]; // Keep the previous state
    });
    setVisibleHeadings(newVisibleHeadings);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleHeadings]);

  return (
    <div className="w-screen mx-auto p-6 bg-gray-100">
      <style>{`
        .heading-container {
          display: flex;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .animated-heading {
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: bold;
          text-transform: uppercase;
          color: #333;
          padding: 10px 20px;
          position: relative;
          overflow: hidden; /* Ensure the border is clipped to the heading */
        }

        .animated-heading::before,
        .animated-heading::after {
          content: "";
          position: absolute;
          height: 4px;
          background-color: #ff5722; /* Orange color */
          transition: width 0.5s ease, left 0.5s ease, right 0.5s ease;
        }

        .animated-heading::before {
          top: 0;
          left: 50%;
          width: 0;
          transform: translateX(-100%); /* Start from left */
        }

        .animated-heading::after {
          bottom: 0;
          right: 50%;
          width: 0;
          transform: translateX(100%); /* Start from right */
        }

        .heading-container.visible .animated-heading::before {
          width: 100%;
          left: 0;
          transform: translateX(0); /* Animate into view from left */
        }

        .heading-container.visible .animated-heading::after {
          width: 100%;
          right: 0;
          transform: translateX(0); /* Animate into view from right */
        }

        .heading-container.visible {
          opacity: 1;
        }

        .image-container {
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .image-visible {
          opacity: 1;
        }

        .flex-container {
          padding: 1.5rem 0;
        }

        .video-container {
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .video-container.visible {
          opacity: 1;
          animation: fadeInUp 1.5s ease forwards;
        }

        .player {
          aspect-ratio: 16/9;
          width: 100%;
        }
      `}</style>

      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 flex-container mb-12 mt-12">
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.postimg.cc/kMTNgN3x/rsz-c94a10fc-ae47-4281-b6d4-2f10ca0c3ddc.jpg"
            alt="Sample Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg image-container image-visible"
          />
        </div>
        <div className="w-full lg:w-1/2" ref={el => headingRefs.current[0] = el}>
          <div className={`heading-container ${visibleHeadings[0] ? 'visible' : ''}`}>
            <h1 className="animated-heading text-center lg:text-left">A VIEW IN EVERY DIRECTION</h1>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4 text-center lg:text-left" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            With every project we take on, we try to innovate, experiment, and raise the bar of quality in all aspects of our work.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 flex-container mr-4">
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.postimg.cc/Wp039TSt/rsz-16f1641d6-983e-4d25-a3eb-890ae260994f.jpg"
            alt="Sample Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg image-container image-visible"
          />
        </div>
        <div className="w-full lg:w-1/2" ref={el => headingRefs.current[1] = el}>
          <div className={`heading-container ${visibleHeadings[1] ? 'visible' : ''}`}>
            <h1 className="animated-heading text-center lg:text-left">EXPERIENCE THE INNOVATION</h1>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4 text-center lg:text-left" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            We pride ourselves on creating constructions that not only serve a purpose but leave a lasting impact.
          </p>
        </div>
      </div>

      {/* New Section: Why Choose Us */}
      <div className="flex flex-col items-center gap-6 flex-container mt-12">
        <div className="w-full" ref={el => headingRefs.current[2] = el}>
          <div className={`heading-container ${visibleHeadings[2] ? 'visible' : ''}`}>
            <h1 className="animated-heading text-center">WHY CHOOSE US?</h1>
          </div>
          <p className="text-gray-600 leading-relaxed text-center mt-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            Moten Villas has diversified experience in infrastructure, interior design, value engineering, and project management. With over 17 years of experience, we build lifetime relationships with our clients through our services, under the supervision of professionals.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative mt-12 h-auto w-screen sm:w-auto sm:h-[80vh] object-cover overflow-hidden shadow-lg border border-gray-300 rounded-lg video-container visible">
          <iframe
            className="player w-full h-[100%] object-cover  border-none"
            src="https://www.youtube.com/embed/3fg07ANuWws?si=TovWREkcBsTicPZG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AnimatedImages;
