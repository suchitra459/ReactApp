import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-4">Sign In</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
