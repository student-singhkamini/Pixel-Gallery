import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl px-8 py-5 flex flex-col md:flex-row md:justify-between md:items-center">
      <div>
        <h1 className="text-3xl font-bold text-white">
          📸 Pixel Gallery
        </h1>

        <p className="text-slate-300 mt-1 text-sm">
          Discover beautiful photos from around the world
        </p>
      </div>

      <div className="mt-4 md:mt-0">
        <input
  type="text"
  placeholder="Search Images..."
  className="bg-transparent text-white placeholder:text-gray-500 px-4 py-2 rounded-lg border border-white/20 w-72 outline-none focus:border-orange-400 transition-all duration-300"
/>
      </div>
    </nav>
  );
};

export default Navbar;