import React from 'react';
import heroImg from '../assets/hero.png';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

const Hero = ({ 
  title = "Become a React Dev", 
  subtitle = "Find the React job that fits your skill set" 
}) => {
  return (
    <section className="hero py-10 bg-indigo-700 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Images */}
        {/* <div className="relative inline-block my-6">
          <img
            src={heroImg}
            alt="Base Layer"
            className="base"
          />
          <img
            src={reactLogo}
            alt="React Logo"
            className="framework"
          />
          <img
            src={viteLogo}
            alt="Vite Logo"
            className="vite"
          />
        </div> */}

        {/* Dynamic Titles */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            {title}
          </h1>
          <p className="text-lg sm:text-xl my-2">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;