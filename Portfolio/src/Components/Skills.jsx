import React from 'react';

function Skills() {
  const skills = [
    'HTML5',
    'CSS',
    'SCSS',
    'Tailwind CSS',
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
  ];

  return (
    <section className="bg-white  py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">My Skills</h2>
        <p className="text-gray-600 text-center mb-4">
          I have a diverse set of skills that enable me to build modern web applications. 
          Here are some of the technologies and frameworks I work with:
        </p>

        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 m-2 shadow-md transition duration-300 hover:bg-gray-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;