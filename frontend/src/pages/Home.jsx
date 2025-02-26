import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImage from "../assets/Images/heroImage.webp";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";

const Home = () => {
  return (
    <div className="relative pt-16">
      <Navbar /> 
      
      {/* Hero Section with Background Image */}
      <section 
  className="p-20 z-10 transition-opacity duration-500 bg-cover bg-center max-h-[610px] flex items-center justify-center text-white"
  style={{ 
    backgroundImage: `url(${heroImage})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center" // Moves the image up, cropping from the top 
  }}
>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[450px] p-10 bg-black bg-opacity-60 rounded-2xl">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
              Let's kick start your <span className="text-blue-400">Learning Goals</span>
            </h1>
            <p className="mt-3 text-lg text-gray-200">
              Explore our courses and enhance your skills with our expert instructors.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2 group hover:bg-blue-700 transition">
                Get started
                <IoIosArrowRoundForward className="text-2xl transition-transform group-hover:translate-x-2 group-hover:rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* First Card Section - Courses */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Our Courses</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card title="Course 1" description="Description of Course 1" />
          <Card title="Course 2" description="Description of Course 2" />
          <Card title="Course 3" description="Description of Course 3" />
        </div>
      </section>
      
      {/* Second Card Section - Additional Info */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">More Learning Options</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card title="Resource 1" description="Description of Resource 1" />
          <Card title="Resource 2" description="Description of Resource 2" />
          <Card title="Resource 3" description="Description of Resource 3" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
