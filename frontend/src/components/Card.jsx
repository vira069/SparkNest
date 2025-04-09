import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg h-[16rem] w-[14rem] transition-transform duration-300 hover:scale-105 hover:shadow-blue">
      <h3 className="text-xl font-bold m-1 p-1 transition-transform duration-300 hover:text-blue-900 hover:scale-105">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
