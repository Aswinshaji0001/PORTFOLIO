import React from 'react';

function Contact() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-200 text-gray-800 rounded-lg p-6 m-4 shadow-md transition duration-300 hover:bg-gray-300 w-64 text-center">
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/Aswinshaji0001" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Aswinshaji0001
            </a>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-lg p-6 m-4 shadow-md transition duration-300 hover:bg-gray-300 w-64 text-center">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="http://aswinshaji0001@gmail.com" // Replace with your email
              className="text-blue-500 hover:underline"
            >
              aswinshaji0001@gmail.com
            </a>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-lg p-6 m-4 shadow-md transition duration-300 hover:bg-gray-300 w-64 text-center">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">9207298681</p> {/* Replace with your phone number */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;