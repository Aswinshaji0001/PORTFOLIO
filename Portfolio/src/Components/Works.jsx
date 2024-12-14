import React, { useEffect, useState, useRef } from 'react';

function Projects() {
  const projects = [
    {
      title: 'Portfolio',
      description: 'A personal portfolio website built with React and Tailwind CSS. This project showcases my skills, projects, and experience. It features a responsive design and smooth animations, providing an engaging user experience.',
      link: 'https://example.com/project-one',
      image: 'image.jpeg', // Replace with your project image URL
    },
    {
      title: 'Ecommerce Website',
      description: 'An ecommerce platform developed using React for the frontend and Node.js with Express for the backend. The application utilizes MongoDB for data storage, allowing users to browse products, add them to their cart, and complete purchases. Tailwind CSS is used for styling, ensuring a modern and responsive design.',
      link: 'https://example.com/project-two',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
    },
    {
      title: 'College Management Website',
      description: 'A comprehensive college management system built with React and Tailwind CSS for the frontend, and Node.js with MongoDB for the backend. This project allows administrators to manage student records, courses, and faculty information efficiently. The user-friendly interface enhances the overall experience for both students and staff.',
      link: 'https://example.com/project-three',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animating the projects when the section is in view
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => [...prev, index]);
            }, index * 500); // Increased delay (500ms per project)
          });
          observer.disconnect(); // Stop observing after the animation starts
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
  }, [projects]);

  return (
    <section ref={sectionRef} className="bg-black py-10" id='works'>
      <div className="container mx-auto px-4 bg-black">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8"> {/* Flexbox layout to center the items */}
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-gradient-to-r from-slate-900 to-slate-700 ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-500 w-full sm:w-80 md:w-96 lg:w-96`} // Adjusted width on larger screens
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover text-white" /> {/* Increased image height */}
              <div className="p-4">
                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-white mb-4">{project.description}</p>
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
