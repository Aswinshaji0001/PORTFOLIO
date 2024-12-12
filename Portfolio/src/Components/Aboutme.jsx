import React from 'react';
import './css/AboutMe.css'


function AboutMe() {
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto px-4 animate__animated animate__fadeInUp">
        <div className="flex justify-center mb-4">
          <img src="./image.jpeg" alt="Aswin" className="w-48 h-48 rounded-full object-cover animate__animated animate__fadeIn animate__delay-1s" />
        </div>
        <h4 className="text-2xl font-bold text-center mb-4 text-red-600">Hello My Name Is</h4>
        <h2 className="text-5xl font-bold text-center mb-4 text-white ">Aswin Shaji</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto text-white">
                Highly motivated and detail-oriented MERN Stack Developer with a Bachelor of Computer Applications
        (BCA). Proficient in building and maintaining full-stack web applications using MongoDB, Express.js, React.js,
        and Node.js. Experienced in designing responsive user interfaces, developing RESTful APIs, and managing
        databases for seamless application
        </p>
        <div className='flex justify-center'>
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 my-5">Contact me</button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;