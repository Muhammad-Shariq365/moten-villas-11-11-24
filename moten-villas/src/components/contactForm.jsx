import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { RiMapPin2Fill, RiPhoneFill, RiMailFill } from "react-icons/ri"; 
import { FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ContactForm = () => {
  const form = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsClicked(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out. We will get back to you soon.',
          confirmButtonColor: '#FF8C00', // Orange color
        });
        setIsClicked(false);
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send the message. Please try again later.',
          confirmButtonColor: '#FF8C00',
        });
        setIsClicked(false);
      });
  };

  return (
    <div id="contact" className="w-full bg-white mb-24">
      <div className="lg:w-[80%] w-[90%] m-auto flex flex-col items-center">
        <motion.div className="my-12 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          variants={headingVariants}
        >
          <div className="border-l-4 border-orange-500 h-10 mr-4"></div>
          <h2 className="text-black uppercase text-[40px] font-bold text-center">Get in Touch</h2>
          <div className="border-r-4 border-orange-500 h-10 ml-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-stretch gap-10">
        <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-4">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
  
  <div className="flex items-start gap-4">
    <RiMapPin2Fill className="text-orange-500 w-14 h-14 sm:w-11 sm:h-11 my-auto" />
    <div>
      <p className="font-semibold text-gray-700 text-lg">Address:</p>
      <p className="text-gray-600 text-base">
        43c, Office 302 Lane 12, Bukhari Commercial Area Phase 6 DHA, Karachi, Sindh 75500
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <RiPhoneFill className="text-orange-500 w-8 h-8 my-auto" />
    <div>
      <p className="font-semibold text-gray-700 text-lg">Phone:</p>
      <p className="text-gray-600 text-base">0320 8271405 || 0320 8271406</p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <RiMailFill className="text-orange-500 w-8 h-8 my-auto" />
    <div>
      <p className="font-semibold text-gray-700 text-lg">Email:</p>
      <p className="text-gray-600 text-base">motendevelopers@gmail.com</p>
    </div>
  </div>

  <div className="flex space-x-4 mt-6 justify-center sm:justify-start">
    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="text-green-500 hover:text-green-600 transition-transform transform hover:scale-110" size="clamp(25px, 3vw, 35px)" />
    </a>
    <a href="https://www.facebook.com/motendevelopers/" target="_blank" rel="noopener noreferrer">
      <FaFacebookF className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110" size="clamp(25px, 3vw, 35px)" />
    </a>
    <a href="https://www.youtube.com/@motendevelopers9848" target="_blank" rel="noopener noreferrer">
      <FaYoutube className="text-red-600 hover:text-red-700 transition-transform transform hover:scale-110" size="clamp(25px, 3vw, 35px)" />
    </a>
    <a href="https://www.instagram.com/motendevelopers/?hl=en" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-110" size="clamp(25px, 3vw, 35px)" />
    </a>
  </div>
</div>


          <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className={`p-3 rounded transition duration-300 ${
                  isClicked ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600'
                } text-white`}
              >
                {isClicked ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="w-full">
          <motion.div className="my-8 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
          >
             <div className="flex items-center justify-center mt-12 sm:mt-0 mb-12">
          <div className="border-l-4 border-orange-500 h-10 mr-4"></div>
          <h2 className="text-black uppercase font-bold text-center">OUR LOCATION</h2>
          <div className="border-r-4 border-orange-500 h-10 ml-4"></div>
        </div>
          </motion.div>
          <div className="w-full">
            <div className="relative w-full h-[400px] sm:h-[300px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.128086470776!2d67.0657985!3d24.791067200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cfd85cfb515%3A0xffc47c64d14a8daf!2sMoten%20Developers%20%26%20Realtor!5e0!3m2!1sen!2s!4v1730657862574!5m2!1sen!2s"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
