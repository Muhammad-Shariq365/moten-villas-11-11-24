import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";

const ContactForm = () => {
  const images = [
    "https://i.postimg.cc/XvQ465w2/rsz-fd53137e-8344-4741-ab56-b173d295f4aa.jpg",
    "https://i.postimg.cc/G3GZnYJb/rsz-9384266a-7054-4699-b97b-b17728188649.jpg",
    "https://i.postimg.cc/SR5KF9p0/rsz-cd1b1853-9497-4603-8ddd-ced19a55155d.jpg"
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
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8  px-4 sm:px-12 mt-24 mr-4 ml-4">
      <div className="rounded-md relative w-full lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden ">
        <div className=" absolute inset-0 flex transition-transform duration-500 ease-in-out " 
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
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
        <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight w-[250px] sm:w-full mx-auto">
          Where to Find Us & How to Contact Us
        </h2>
        <div className="space-y-4 w-[250px] sm:w-full mx-auto text-gray-600">
          <h3 className="text-lg lg:text-xl font-semibold uppercase  flex justify-center items-center">Our Address</h3>
          <div className="flex items-center  text-sm lg:text-base">
            <FaMapMarkerAlt className="mr-4 w-12 h-12 md:w-6 md:h-6 rounded-full " />
            <p className="text-justify">43c, Office 302 Lane 12, Bukhari Commercial Area Phase 6 DHA, Karachi, Sindh 75500</p>
          </div>

          <p className="flex items-center text-sm lg:text-base">
            <FaPhoneAlt className="w-5 h-5 mr-4 text-gray-600" />
            Call us on 0320-8271405
          </p>

          <p className="flex items-center text-sm lg:text-base pt-3">
            <FaRegClock className="w-6 h-6 mr-4 text-gray-600" />
            Mon - Sat 10 AM - 6 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;