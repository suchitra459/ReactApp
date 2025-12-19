import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
    >
      <img src="/images/banner_bg.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">   
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Unlimited movies,
           TV shows and more
        </h1>
        <p className="mt-4 text-xl">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="mt-4 text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-4 rounded border border-gray-400 text-white"
          />
          <button className="bg-netflix px-8 py-4 rounded text-xl font-semibold">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;

