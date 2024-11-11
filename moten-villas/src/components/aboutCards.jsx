import React, { useState, useEffect } from "react";
import Services from "../components/services";

const AboutCard = () => {
  const images = [
    "https://i.postimg.cc/vDF4jK9F/rsz-1c41c22a0-980b-44c2-a217-7ded33df00fa.jpg",
    "https://i.postimg.cc/0NY1dB5K/rsz-b36ffe51-5132-4577-9125-b28440217096.jpg",
    "https://i.postimg.cc/sXKFbGhV/5a6ff7cd-6223-491f-9120-b928d4da2dfd.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  return (
    <div className="overflow-hidden mt-24  px-4 sm:px-12">
       <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mr-4 ml-4">
      <div className=" rounded-md relative w-full lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden ">
        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out " 
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover "
            />
          ))}
        </div>

        <button
          onClick={handlePrevImage}
          className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 ml-4 text-orange-500 p-4 rounded-md shadow-md transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNextImage}
          className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 text-orange-500 p-4 mr-4 shadow-md transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight mr-4 ml-4">
          About Moten Villas
        </h2>
        <div className="space-y-4 text-gray-600 flex-col mr-4 ml-4">
          <h3 className="text-lg lg:text-xl font-semibold uppercase">Established in 2007</h3>
          <p className="text-justify">
            Moten Villas has a singular goal of leading the industry with exemplary standards of design, structure, and innovation with remarkable projects in our portfolio. Our ethos embodies an innovative vision, contemporary aesthetics, and top-notch quality to elevate the lifestyle of our clients with every project.
          </p>
        </div>
      </div>
   
    </div>
    
    </div>
     
  );
};

export default AboutCard;
