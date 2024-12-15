// src/Education.js
import React, { useEffect, useState } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('education-section');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
        // Start animating cards one after the other
        const cards = document.querySelectorAll('.education-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => [...prev, index]);
          }, index * 300); // Delay for each card
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="education-section" className="bg-black py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Education</h2>
        
        <div className={`education-card bg-red-700 shadow-md rounded-lg p-6 mb-6 transform transition-transform duration-700 bg-gradient-to-r from-slate-500 to-slate-800 ${visibleCards.includes(0) ? 'translate-x-0' : '-translate-x-full'}`}>
          <h3 className="text-xl font-semibold text-white">MERN FULL STACK INTERNSHIP</h3>
          <p className="text-white">Synneffo Solutions</p>
          <p className="text-white">June 2024 - January 2025</p>
          <ul className="list-disc list-inside mt-2 text-white">
            <li>Relevant Coursework: MERN Stack Development, RESTful APIs, Database Management</li>
            <li>Honors/Awards: Internship Completion Certificate</li>
            <li>Activities: Participated in team projects and code reviews</li>
          </ul>
        </div>

        <div className={`education-card bg-red-700 shadow-md rounded-lg p-6 mb-6 transform transition-transform duration-700 bg-gradient-to-r from-slate-500 to-slate-800 ${visibleCards.includes(1) ? 'translate-x-0' : '-translate-x-full'}`}>
          <h3 className="text-xl font-semibold text-white">Bachelor of Computer Applications</h3>
          <p className="text-white">St. George's College Aruvithura, MG University</p>
          <p className="text-white">June 2021 - March 2024</p>
          <p className="mt-2 text-white">Key subjects: Data Structures, Web Development, Software Engineering</p>
        </div>

        <div className={`education-card bg-red-700 shadow-md rounded-lg p-6 mb-6 transform transition-transform duration-700 bg-gradient-to-r from-slate-500 to-slate-800 ${visibleCards.includes(2) ? 'translate-x-0' : '-translate-x-full'}`}>
          <h3 className="text-xl font-semibold text-white">Plus Two (Science)</h3>
          <p className="text-white">St. Thomas HSS Pala</p>
          <p className="text-white">June 2019 - March 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;