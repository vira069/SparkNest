import React from 'react'

const HolographicCard = ({ title })=> {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="relative w-72 h-48 bg-gray-900 flex justify-center items-center rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 group">
        <h2 className="text-cyan-400 text-2xl font-bold relative z-10">
          {title}
        </h2>
        {/* Pseudo Element for Glow Effect */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent rotate-[-45deg] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-full"></div>
      </div>
    </div>
  );
};

export default HolographicCard;