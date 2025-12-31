import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => { 
   const navigate = useNavigate();
   return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="bg-gray-800 p-8 rounded w-full max-w-md">
        <h2 className="text-2xl mb-4">Register</h2>
<input
          type="name"
          placeholder="Name"
          className="w-full p-3 mb-3 bg-gray-700 rounded"
        />
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

        <Link to="/Register" className="w-full bg-netflix py-3 rounded">
          Register
        </Link>
      </div>
    </div>
  );
}
export default Register;