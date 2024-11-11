import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // No need for .scss import

const AppointmentModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowContent(true);
    } else {
      const timer = setTimeout(() => setShowContent(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
    .send(
      import.meta.env.VITE_EMAILJS_ALT_SERVICE_ID, // Use alternative service ID
      import.meta.env.VITE_EMAILJS_ALT_TEMPLATE_ID, // Use alternative template ID
      {
        to_name: 'Your Company Team',
        user_name: fullName,
        user_email: email,
        user_phone: phoneNumber,
        appointment_date: date,
        appointment_time: time,
      },
      import.meta.env.VITE_EMAILJS_ALT_USER_ID // Use alternative user ID
    )
      .then(
        () => {
          setIsSubmitting(false);
          Swal.fire({
            icon: 'success',
            title: 'Appointment Booked!',
            text: 'Your appointment has been successfully booked.',
            confirmButtonColor: '#ce581500',
          });
          onClose();
        },
        (error) => {
          setIsSubmitting(false);
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleClose = () => {
    setShowContent(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !showContent) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-50">
      <div
        className={`bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 sm:mx-0 transform transition-all duration-300 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 transition-opacity duration-500 ease-out">
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className={`mb-4 transition-all duration-500 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="John Doe"
              required
              title="Please fill out this field"
            />
          </div>
          <div className={`mb-4 transition-all duration-500 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="you@example.com"
              required
              title="Please provide a valid email address"
            />
          </div>
          <div className={`mb-4 transition-all duration-500 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="(123) 456-7890"
              required
              title="Please provide your phone number"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className={`transition-all duration-500 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                required
                title="Please select a date"
              />
            </div>
            <div className={`transition-all duration-500 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="block w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                required
                title="Please select a time"
              />
            </div>
          </div>
          <button
  type="submit"
  className={`w-full py-3 ${isSubmitting ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'} font-semibold rounded-md shadow-md hover:${isSubmitting ? 'bg-green-600' : 'bg-orange-600'} transition duration-300 ease-in-out mb-2 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
  disabled={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</button>

          <button
            type="button"
            onClick={handleClose}
            className={`w-full py-3 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition duration-300 ease-in-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
