import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 px-10 py-6 flex justify-between items-center">
      <h1 className="text-netflix text-5xl font-extrabold text-blue-800">NETPLUS</h1>

      <div className="flex items-center gap-4">
        <select className="bg-black border border-gray-400 text-white px-3 py-1 rounded">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <button className="bg-netflix px-4 py-1 rounded text-white font-semibold">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
