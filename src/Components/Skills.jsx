import React from 'react';
import './css/Skills.css'; // Ensure this file is imported
import 'animate.css'; // Import animate.css
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaDatabase, FaAws } from 'react-icons/fa'; // Import FaAws from react-icons/fa
import { DiCssdeck } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiSqlite } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML5', bgColor: 'bg-red-500', icon: <FaHtml5 className="text-4xl text-white" /> },
    { name: 'CSS', bgColor: 'bg-blue-500', icon: <FaCss3Alt className="text-4xl text-white" /> },
    { name: 'Tailwind CSS', bgColor: 'bg-purple-500', icon: <SiTailwindcss className="text-4xl text-white" /> },
    { name: 'ReactJS', bgColor: 'bg-blue-500', icon: <FaReact className="text-4xl text-white" /> },
    { name: 'NodeJS', bgColor: 'bg-green-500', icon: <FaNode className="text-4xl text-white" /> },
    { name: 'MongoDB', bgColor: 'bg-yellow-500', icon: <FaDatabase className="text-4xl text-white" /> }, // Use FaDatabase as a placeholder for MongoDB
    { name: 'Express JS', bgColor: 'bg-orange-500', icon: <SiExpress className="text-4xl text-white" /> },
    { name: 'SQL', bgColor: 'bg-gray-500', icon: <SiSqlite className="text-4xl text-white" /> },
    { name: 'AWS', bgColor: 'bg-blue-800', icon: <FaAws className="text-4xl text-white" /> }, // Use FaAws as a placeholder for AWS
    { name: 'Toastify', bgColor: 'bg-green-500', icon: <DiCssdeck className="text-4xl text-white" /> }, // Placeholder icon
  ];

  return (
    <section className="bg-black py-10">
      <div className="container mx-auto p-2 pt-4 bg-black">
        <h1 className="text-3xl font-bold mb-4 text-center text-white animate__animated animate__fadeIn">Skills</h1>
        <div className="flex flex-wrap justify-center my-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`${
                skill.bgColor
              } hover:bg-opacity-80 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 animate__animated animate__fadeIn`}
              style={{
                animationDelay: `${index * 0.2}s`, // Delay each skill's animation
              }}
            >
              <div className="text-center mb-2">
                {skill.icon} {/* Display the icon */}
              </div>
              <h2 className="text-lg font-bold text-white text-center">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
