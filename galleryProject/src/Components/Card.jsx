import React from "react";

const Card = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noreferrer"
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-700/60 transition-all duration-300 hover:-translate-y-2">

        <div className="overflow-hidden">
          <img
            src={elem.download_url}
            alt={elem.author}
            className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-4">
          <h2 className="text-black font-bold text-lg">
            {elem.author}
          </h2>

          <p className="text-black text-sm mt-1">
            Click to view image
          </p>
        </div>

      </div>
    </a>
  );
};

export default Card;