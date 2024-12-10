import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One, highlighting its features and technologies used.',
      link: 'https://example.com/project-one',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two, highlighting its features and technologies used.',
      link: 'https://example.com/project-two',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three, highlighting its features and technologies used.',
      link: 'https://example.com/project-three',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;