import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 px-4 md:px-10 py-4 md:py-6 flex justify-between items-center">
      
      <h1 className="text-blue-800 text-3xl md:text-5xl font-extrabold">
        NETPLUS
      </h1>

      <div className="flex items-center gap-2 md:gap-4">
        
        <select className="bg-black border border-gray-400 text-white px-2 md:px-3 py-1 rounded text-sm md:text-base">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        <Link
          to="/signin"
          className="bg-blue-600 px-3 md:px-4 py-1.5 rounded text-white text-sm md:text-base font-semibold"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
