import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">Travelista</Link>
        </h1>
        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-purple-500">
            Home
          </Link>
          <Link to="/create-post" className="hover:text-purple-500">
            Create Post
          </Link>
          <Link to="/edit-post/1" className="hover:text-purple-500">
            Edit Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
