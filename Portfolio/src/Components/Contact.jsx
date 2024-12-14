import React, { useEffect, useState, useRef } from 'react';
import './css/Contact.css';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section becomes visible
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
  }, []);

  const contactMethods = [
    { label: 'GitHub', href: 'https://github.com/Aswinshaji0001' },
    { label: 'Email', href: 'https://aswinshaji0001@gmail.com' },
    { label: 'Phone', href: 'tel:+9207298681', text: '9207298681' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aswin-shaji-ba39a32b8/' },
  ];

  return (
    <section ref={sectionRef} className="bg-black py-10" id='contact'>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-6 text-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Contact Me
        </h2>
        <div className="flex flex-wrap justify-center">
          {contactMethods.map((contact, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-lg p-6 m-4 shadow-md transition duration-300 hover:bg-red-700 w-64 text-center transform transition-transform duration-500 ${isVisible ? `fade-slide-up delay-${index * 300}` : 'opacity-0 translate-y-10'}`}
            >
              <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
              {contact.label !== 'Phone' && (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {contact.label === 'LinkedIn' ? 'Aswin Shaji' : contact.label}
                </a>
              )}
              {contact.label === 'Phone' && (
                <p className="text-white">{contact.text}</p> // Only display text for phone
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
