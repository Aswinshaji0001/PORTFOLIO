import React from 'react';
import './css/Skills.css';

function Skills() {
  return (
    <section className="bg-black py-10"> {/* Increased vertical padding */}
      <div className="container mx-auto p-2 pt-4 bg-black">
        <h1 className="text-3xl font-bold mb-4 text-center text-white animate-fade-in">Skills</h1> {/* Increased margin-bottom */}
        <div className="animate-slide-in flex flex-wrap justify-center my-3">
          {/* Each skill item is set to take up 1/3 of the width on larger screens */}
          <div className="animate-fade-in bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">HTML5</h2>
          </div>
          <div className="animate-fade-in bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">CSS</h2>
          </div>
          <div className="animate-fade-in bg-purple-500 hover:bg-purple-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">Tailwind CSS</h2>
          </div>
          <div className="animate-fade-in bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">ReactJS</h2>
          </div>
          <div className="animate-fade-in bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">NodeJS</h2>
          </div>
          <div className="animate-fade-in bg-yellow-500 hover:bg-yellow-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">MongoDB</h2>
          </div>
          <div className="animate-fade-in bg-orange-500 hover:bg-orange-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">Express JS</h2>
          </div>
          <div className="animate-fade-in bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">SQL</h2>
          </div>
          <div className="animate-fade-in bg-blue-800 hover:bg-blue-900 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">AWS</h2>
          </div>
          <div className="animate-fade-in bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3">
            <h2 className="text-lg font-bold text-white text-center">Toastify</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;