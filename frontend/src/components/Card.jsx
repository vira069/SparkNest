import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRocket } from "react-icons/fa"; // Example icon from react-icons

const Card = ({ title, description, icon }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const route = `/${title.replace(/\s+/g, "_").toLowerCase()}`; // Convert title to a route-friendly format
    navigate(route);
  };

  return (
    <div
      className="bg-white p-6 shadow-md rounded-lg h-[16rem] w-[14rem] transition-transform duration-300 hover:scale-105 hover:shadow-blue cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Icon Section */}
      <div className="flex justify-center items-center mb-1 text-blue-500 text-4xl">
        {icon || <FaRocket />} {/* Use the provided icon or a default icon */}
      </div>
      {/* Title */}
      <h3 className="text-xl font-bold m-1 p-1 transition-transform duration-300 hover:text-blue-700 hover:scale-105 text-center">
        {title}
      </h3>
      {/* Description */}
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Card;
