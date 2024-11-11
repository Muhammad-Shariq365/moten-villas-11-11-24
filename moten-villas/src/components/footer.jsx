import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/logo-mtv.png';
import AppointmentModal from '../components/appointmentmodel';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 text-center lg:text-left">
        
        {/* About Us Section */}
        <div>
          <h2 className="text-clamp-lg font-bold text-xl mb-4">ABOUT US</h2>
          <p className="sm:text-justify text-clamp-sm mb-6 leading-relaxed">
            
It’s more than just a project; it’s a vision brought to life. At Moten Villas, we are dedicated to pushing the boundaries of innovation and leveraging emerging technologies to craft remarkable residential, commercial, and corporate spaces. 
          </p>
          {/* Company Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            <img src={Logo} alt="Moten Villas Logo" className="h-24 sm:h-32" />
          </div>
        </div>

        {/* Booking Appointment Section */}
        <div>
          <h2 className="text-clamp-lg font-bold mb-4 text-xl">FOR BOOKING AN APPOINTMENT</h2>
          <p className="text-clamp-sm mb-6 leading-relaxed break-words text-center sm:text-justify">
            Want to view one of our homes? You can request an appointment here.
          </p>
          <button 
            onClick={openModal}
            className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
          >
            Book Appointment
          </button>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-clamp-lg font-bold mb-4 text-xl sm:ml-7">CONTACT US</h2>
          <div className="flex items-center text-clamp-sm mb-4  mr-6 sm:mx-auto space-x-1">
            
            <p className="leading-relaxed text-center sm:text-left ">
            <span className="text-white text-xl ">📍</span>
            43c, Office 302 Lane 12, Bukhari Commercial Area Phase 6 DHA, Karachi, Sindh 75500
            </p>
          </div>

          <div className="sm:ml-1 flex items-center justify-center text-clamp-sm mb-6 space-x-2 sm:justify-start">
            <span className="text-xl">✉️</span>
            <p>motenvillas@gmail.com</p>
          </div>

          {/* Social Media Icons */}
          <div className="sm:mr-5 flex justify-center sm:mt-32 lg:justify-end space-x-6 text-orange-500 text-2xl">
            <a href="https://www.facebook.com/motendevelopers/" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="https://www.instagram.com/motendevelopers/?hl=en" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@motendevelopers9848" aria-label="YouTube" className="hover:text-white transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
}
