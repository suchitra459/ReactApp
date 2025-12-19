import React from "react";
import { Link } from "react-router-dom";

const Register = () => {  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="bg-gray-800 p-8 rounded w-full max-w-md">
        <h2 className="text-2xl mb-4">Register</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 bg-gray-700 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 bg-gray-700 rounded"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 bg-gray-700 rounded"
        />

        <button className="w-full bg-netflix py-3 rounded">
          Register
        </button>
      </div>
    </div>
  );
}
export default Register;