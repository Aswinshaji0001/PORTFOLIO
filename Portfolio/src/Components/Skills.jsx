import React from 'react';
import './css/Skills.css'
function Skills() {
  return (
    <section className="bg-black py-8">
    <div class="container w-screen mx-auto p-4 pt-6 bg-black">
        <h1 class="text-3xl font-bold mb-4 text-center text-white animate-fade-in">Skills</h1>
        <div class="animate-slide-in flex flex-wrap justify-center my-5">
            <div class="animate-fade-in bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md">
                <h2 class="text-lg font-bold text-white">HTML5</h2>
            </div>
            <div class="animate-fade-in bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md">
                <h2 class="text-lg font-bold text-white">CSS</h2>
            </div>
            <div class="animate-fade-in bg-purple-500 hover:bg-purple-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md">
                <h2 class="text-lg font-bold text-white">Tailwind CSS</h2>
            </div>
            <div class="animate-fade-in bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md">
                <h2 class="text-lg font-bold text-white">ReactJS</h2>
            </div>
            <div class="animate-fade-in bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md">
                <h2 class="text-lg font-bold text-white">NodeJS</h2>
            </div>
            <div class="animate-fade-in bg-yellow-500 hover:bg-yellow-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md">
                <h2 class="text-lg font-bold text-white">MongoDB</h2>
            </div>
            <div class="animate-fade-in bg-orange-500 hover:bg-orange-700 transition duration-300 ease-in-out m-2 p-4 rounded-lg shadow-md">
                <h2 class="text-lg font-bold text-white">Express JS</h2>
            </div>
        </div>
    </div>
  </section>
  );
}

export default Skills;