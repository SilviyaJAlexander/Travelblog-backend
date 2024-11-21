import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
      {/* Hero Image */}
      <img
        src="https://121clicks.com/wp-content/uploads/2024/09/best-top-travel-landscape-photography-01.jpg" // Replace with your desired image URL
        alt="Travel Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold">Explore the World with Travelista</h1>
        <p className="text-lg mt-2">
          Discover hidden gems, share experiences, and embark on unforgettable journeys.
        </p>
        <button className="mt-4 bg-sky-800 hover:bg-sky-800 text-white py-2 px-6 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
