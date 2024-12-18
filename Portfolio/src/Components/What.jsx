import React, { useEffect, useState, useRef } from 'react';
import { FaCode, FaServer, FaMobileAlt, FaGithub, FaLightbulb, FaUsers, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'Front-end Development', icon: <FaCode className="text-3xl mr-4 text-blue-500" /> },
    { name: 'Back-end Development', icon: <FaServer className="text-3xl mr-4 text-green-500" /> },
    { name: 'Full-Stack Development', icon: <FaLaptopCode className="text-3xl mr-4 text-indigo-500" /> },
    { name: 'GitHub Usage', icon: <FaGithub className="text-3xl mr-4 text-blue-800" /> },
    { name: 'Problem Solving', icon: <FaLightbulb className="text-3xl mr-4 text-yellow-500" /> },
    { name: 'Collaboration and Communication', icon: <FaUsers className="text-3xl mr-4 text-teal-500" /> },
    { name: 'Database Management', icon: <FaDatabase className="text-3xl mr-4 text-orange-500" /> },
    { name: 'Clean Code', icon: <FaTools className="text-3xl mr-4 text-red-500" /> },
    { name: 'Responsive Design', icon: <FaMobileAlt className="text-3xl mr-4 text-purple-500" /> },
  ];

  const [visibleSkills, setVisibleSkills] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills((prev) => [...prev, index]);
            }, index * 300); // Adjust the delay for each skill
          });
          observer.disconnect();
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [skills]);

  return (
    <section ref={sectionRef} id="skills" className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">What Can I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow transition-all duration-500 ease-in-out flex items-center 
                ${visibleSkills.includes(index) ? 'opacity-100' : 'opacity-0'} 
                transition-opacity duration-700 ease-in-out delay-75 
                hover:from-slate-800 hover:to-slate-600`} // Subtle gradient change on hover
              style={{
                animationDelay: `${index * 0.2}s`, // Delay each skill's animation
              }}
            >
              {skill.icon}
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
