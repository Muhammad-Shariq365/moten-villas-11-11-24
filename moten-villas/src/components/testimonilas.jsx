import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import TestimonialsImage from "../assets/portfolioimg.jpg"; // Path to the "Testimonials" image
import VideoCards from '../components/videoCards'; // Assuming you have a VideoCards component for displaying testimonials

const Testimonials = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Testimonials | Moten Villas - Builders & Developers in DHA Karachi</title>
        <meta
          name="description"
          content="Read the testimonials from our satisfied clients at Moten Villas. We are the trusted builders and developers in DHA Karachi, specializing in residential and commercial projects."
        />
        <meta
          name="keywords"
          content="builders DHA Karachi, developers in DHA Karachi, client testimonials, real estate builders, construction services Karachi"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          property="og:title"
          content="Client Testimonials | Moten Villas - Trusted Builders in DHA Karachi"
        />
        <meta
          property="og:description"
          content="Discover what our clients have to say about Moten Villas, the leading builders and developers in DHA Karachi."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/8Cz0Gmd5/Moten-Villas.png" // Replace with the relevant image URL
        />
        <meta
          property="og:url"
          content="https://motenvillas.com/testimonials"
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
          content="Client Testimonials | Moten Villas"
        />
        <meta
          name="twitter:description"
          content="Read client testimonials about Moten Villas, the leading construction company in DHA Karachi."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/8Cz0Gmd5/Moten-Villas.png" // Replace with the image URL for Twitter
        />
        <link rel="canonical" href="https://motenvillas.com/testimonials" />
        {/* Preload Image for Performance */}
        <link rel="preload" href={TestimonialsImage} as="image" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-screen h-[40vh] sm:h-[70vh] object-cover bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex justify-center items-center">
            <span>Loading...</span>
          </div>
        )}

        <img
          src={TestimonialsImage}
          alt="Testimonials"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'animate-zoomIn' : 'opacity-0'}`}
        />

        {imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl sm:text-8xl font-bold text-black bg-white bg-opacity-50 p-4 animate-borderAnimation">
              Testimonials
            </h1>
          </div>
        )}

        <style>{`
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

      {/* Video Testimonials or Portfolio Cards */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Are Saying</h2>
          <VideoCards /> {/* Assuming you have a VideoCards component that will display client testimonials */}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
