import React from 'react';
import { Helmet } from 'react-helmet';
import PortfolioCard from "../components/protfolioCard"; // Assuming you have a PortfolioCard component
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import PortfolioImage from '../assets/portfolioimg.jpg'; // Example image for the portfolio section
import Services from '../components/services'; // Services Component (if you have one)

const Portfolio = () => {
  return (
    <div className="overflow-x-hidden">
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Our Portfolio | Moten Villas - Leading Builders & Developers in DHA Karachi</title>
        <meta
          name="description"
          content="Explore our portfolio of completed residential and commercial construction projects by Moten Villas in DHA Karachi. We specialize in top-quality property development."
        />
        <meta
          name="keywords"
          content="portfolio, builders in DHA Karachi, developers in DHA Karachi, real estate projects, construction services DHA, residential projects"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          property="og:title"
          content="Our Portfolio | Moten Villas - Leading Builders & Developers in DHA Karachi"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Moten Villas, showcasing successful residential and commercial construction projects in DHA Karachi. Learn more about our work."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/8Cz0Gmd5/Moten-Villas.png" // Replace with your portfolio image or relevant image URL
        />
        <meta
          property="og:url"
          content="https://motenvillas.com/portfolio" // Replace with the actual URL of your Portfolio page
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
          content="Our Portfolio | Moten Villas"
        />
        <meta
          name="twitter:description"
          content="Discover the successful projects we've completed at Moten Villas, a trusted name in construction in DHA Karachi."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/8Cz0Gmd5/Moten-Villas.png" // Replace with your portfolio image URL for Twitter
        />
        <link rel="canonical" href="https://motenvillas.com/portfolio" />
        {/* Preload Image for Performance */}
        <link rel="preload" href={PortfolioImage} as="image" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-screen h-[40vh] sm:h-[70vh] object-cover bg-gray-200">
        <img
          src={PortfolioImage}
          alt="Moten Villas Portfolio"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl sm:text-8xl font-bold text-white">
            Our Portfolio
          </h1>
        </div>
      </div>

      {/* Portfolio Cards Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Portfolio Card Components */}
            <PortfolioCard title="Residential Project 1" description="Luxury homes in DHA Karachi." imageUrl="path_to_image_1.jpg" />
            <PortfolioCard title="Commercial Project 1" description="State-of-the-art office buildings." imageUrl="path_to_image_2.jpg" />
            <PortfolioCard title="Residential Project 2" description="Elegant villas in DHA Karachi." imageUrl="path_to_image_3.jpg" />
            {/* Add more Portfolio Cards as needed */}
          </div>
          {/* If you have a link to see more projects */}
          <Link to="/portfolio" className="mt-8 inline-block text-blue-600 hover:text-blue-800">View More Projects</Link>
        </div>
      </section>

      {/* Services Section (if relevant) */}
      <Services />
    </div>
  );
};

export default Portfolio;
