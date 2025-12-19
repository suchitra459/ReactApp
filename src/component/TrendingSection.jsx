import React, { useRef } from "react";
import React from "react";

const trendingMovies = [
  { id: 1, img: "/images/movie1.png", badge: "Recently added" },
  { id: 2, img: "/images/movie2.png", badge: "Recently added" },
  { id: 3, img: "/images/movie3.png", badge: "Top 10" },
  { id: 4, img: "/images/movie4.png", badge: "Recently added" },
  { id: 5, img: "/images/movie5.png", badge: "Recently added" },
  { id: 6, img: "/images/movie6.png", badge: "Top 10" },
  { id: 7, img: "/images/movie7.png", badge: "Recently added" },
  { id: 8, img: "/images/movie8.png", badge: "Recently added" },
  { id: 9, img: "/images/movie9.png", badge: "Top 10" },
  { id: 10, img: "/images/movie10.png", badge: "Recently added" },
];

const TrendingSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-black px-10 py-16 text-white">
      <h2 className="text-3xl font-bold mb-4">Trending Now</h2>

      <div className="flex gap-4 mb-10">
        <select className="bg-black border border-gray-600 px-4 py-2 rounded">
          <option>India</option>
          <option>Global</option>
        </select>

        <select className="bg-black border border-gray-600 px-4 py-2 rounded">
          <option>Movies</option>
          <option>TV Shows</option>
        </select>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/70 hover:bg-black text-white p-3 rounded-full"
        >
          ❮
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scroll-smooth px-12"
        >
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative min-w-[250px] group transition-transform duration-500 hover:scale-105"
            >
              <img
                src={movie.img}
                alt="movie"
                className="w-[250px] h-[350px] rounded-xl object-cover"
              />

              <span className="absolute top-3 left-3 text-3xl font-extrabold text-white bg-black/60 px-2 py-1 rounded-md">
                {movie.id}
              </span>

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-xl transition"></div>

              {movie.badge && (
                <span className="absolute bottom-3 left-3 bg-red-600 text-xs px-2 py-1 rounded">
                  {movie.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/70 hover:bg-black text-white p-3 rounded-full"
        >
          ❯
        </button>
      </div>

      
<h2 className="text-3xl font-bold mt-20 mb-8">
        More reasons to join
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-b from-blue-900 to-black p-15 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Enjoy on your TV</h3>
          <p className="text-gray-300 text-sm">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </p>
        </div>

        <div className="bg-gradient-to-b from-blue-900 to-black p-15 rounded-xl">
          <h3 className="text-xl font-semibold mb-8">
            Download your shows to watch offline
          </h3>
          <p className="text-gray-300 text-sm">
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        <div className="bg-gradient-to-b from-blue-900 to-black p-15 rounded-xl">
          <h3 className="text-xl font-semibold mb-8">Watch everywhere</h3>
          <p className="text-gray-300 text-sm">
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </p>
        </div>

        <div className="bg-gradient-to-b from-blue-900 to-black p-15 rounded-xl">
          <h3 className="text-xl font-semibold mb-8">
            Create profiles for kids
          </h3>
          <p className="text-gray-300 text-sm">
            Send kids on adventures with their favourite characters in a space
            made just for them.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default TrendingSection;
