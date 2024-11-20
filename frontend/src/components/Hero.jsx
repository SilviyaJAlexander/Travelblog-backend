import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Hero Image */}
      <img
        src="https://121clicks.com/wp-content/uploads/2024/09/best-top-travel-landscape-photography-01.jpg" // Replace with your desired image URL
        alt="Travel Hero"
        className="w-full h-64 object-cover opacity-70"
      />
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold">Explore the World with Travelista</h1>
        <p className="text-lg mt-2">
          Discover hidden gems, share experiences, and embark on unforgettable journeys.
        </p>
        <button className="mt-4 bg-purple-600 hover:bg-purple-800 text-white py-2 px-6 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
