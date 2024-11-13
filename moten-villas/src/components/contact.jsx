import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ContactImg from '../assets/contact.jpg';
import ContactForm from '../components/contactForm';
import ContactSlider from '../components/contactSlider';

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* SEO Optimization using React Helmet */}
      <Helmet>
        <title>Contact Us | Moten Villas - Leading Builders & Developers in DHA Karachi</title>
        <meta
          name="description"
          content="Get in touch with Moten Villas, a trusted name in construction and real estate development in DHA Karachi. Contact us for inquiries about residential and commercial projects."
        />
        <meta
          name="keywords"
          content="contact Moten Villas, builders in DHA Karachi, developers in DHA Karachi, real estate contact, construction services Karachi"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          property="og:title"
          content="Contact Us | Moten Villas - Leading Builders & Developers in DHA Karachi"
        />
        <meta
          property="og:description"
          content="Reach out to Moten Villas for your construction and real estate needs in DHA Karachi. We provide top-quality residential and commercial property development services."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/8Cz0Gmd5/Moten-Villas.png" // Replace with the actual image URL
        />
        <meta
          property="og:url"
          content="https://motenvillas.com/contact" // Replace with the actual URL of the Contact page
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Contact Us | Moten Villas"
        />
        <meta
          name="twitter:description"
          content="Contact Moten Villas for inquiries about your construction and real estate development needs in DHA Karachi."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/8Cz0Gmd5/Moten-Villas.png" // Replace with your image URL for Twitter
        />
        <link rel="canonical" href="https://motenvillas.com/contact" />
        {/* Preload Contact Image for performance */}
        <link rel="preload" href={ContactImg} as="image" />
      </Helmet>

      {/* Hero Section with Contact Image */}
      <div className="relative w-screen h-[40vh] sm:h-[70vh] bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex justify-center items-center">
            <span>Loading...</span>
          </div>
        )}

        <img
          src={ContactImg}
          alt="Contact Us"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full ${imageLoaded ? 'animate-zoomIn' : 'opacity-0'} transition-opacity duration-1000`}
        />

        {imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl sm:text-8xl font-bold text-black bg-white bg-opacity-50 p-4 animate-borderAnimation">
              Contact Us
            </h1>
          </div>
        )}

        {/* Animations (Zoom In for Image, Border Animation for Text) */}
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
              border-color: transparent;
            }
            25% {
              border-top-color: black;
            }
            50% {
              border-top-color: black;
              border-right-color: black;
            }
            75% {
              border-top-color: black;
              border-right-color: black;
              border-bottom-color: black;
            }
            100% {
              border-color: black;
            }
          }

          .animate-zoomIn {
            animation: zoomIn 1.2s ease-out forwards;
            will-change: transform, opacity;
          }

          .animate-borderAnimation {
            animation: borderAnimation 4s ease-in-out forwards;
            border-width: 4px;
            border-style: solid;
            border-color: transparent;
          }
        `}</style>
      </div>

      {/* Contact Slider Component */}
      <ContactSlider />

      {/* Contact Form Component */}
      <ContactForm />
    </div>
  );
};

export default Contact;
