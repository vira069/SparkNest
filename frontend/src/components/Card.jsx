import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
