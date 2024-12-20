import React from 'react';
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa'; // Importing React Icons
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
import 'animate.css';

function AboutMe() {
  return (
    <section className="relative bg-black py-10" id="aboutme">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter"
        autoPlay
        loop
        muted
      >
        <source src="video.mp4" type="video/mp4" />
        {/* You can add multiple video sources for different browsers */}
        <source src="your-video.webm" type="video/webm" />
      </video>

      <div className="container mx-auto px-4 animate__animated animate__fadeInUp z-10 relative">
        <div className="flex justify-center mb-4">
          <img src="./image.jpeg" alt="Aswin" className="w-48 h-48 rounded-full object-cover animate__animated animate__fadeIn animate__delay-1s" />
        </div>
        <h4 className="text-2xl font-bold text-center mb-4 text-white">Hello My Name Is</h4>
        <h2 className="text-6xl font-bold text-center mb-4 text-white">Aswin Shaji</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto text-white">
          Highly motivated and detail-oriented MERN Stack Developer with a Bachelor of Computer Applications
          (BCA). Proficient in building and maintaining full-stack web applications using MongoDB, Express.js, React.js,
          and Node.js. Experienced in designing responsive user interfaces, developing RESTful APIs, and managing
          databases for seamless application.
        </p>
        <div className='flex justify-center'>
          <a href="#contact">
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 my-5">
              Contact me
            </button>
          </a>
          <a href="CV.pdf" download>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 my-5">
              Download CV
            </button>
          </a>
        </div>

        {/* Social Links Section */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/aswin-shaji-ba39a32b8/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-red-600 transition-colors" />
          </a>
          <a href="tel:+919207298681">
            <FaPhoneAlt className="text-white text-3xl hover:text-red-600 transition-colors" />
          </a>
          <a href="mailto:aswinshaji0001@gmail.com">
            <FaEnvelope className="text-white text-3xl hover:text-red-600 transition-colors" />
          </a>
          <a href="https://github.com/Aswinshaji0001" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl hover:text-red-600 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
