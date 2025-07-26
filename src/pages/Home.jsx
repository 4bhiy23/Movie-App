import React from "react";
import Card from "../assets/components/Card";

const Home = ({ handleClick, handleKeypress, handleChange, searchResults }) => {
  return (
    <div>
      <div className="search flex w-full p-3 justify-center">
        <input
          type="text"
          className="bg-white rounded-l-full px-5 w-1/3 outline-0"
          onChange={handleChange}
          onKeyDown={handleKeypress}
        />
        <button
          className="bg-gray-600 rounded-r-full p-1 outline-0"
          onClick={handleClick}
        >
          Search
        </button>

        <div className="absolute right-1.5 text-white">
          Results: {searchResults.length}
        </div>
      </div>

      <div className="movie-area bg--50 flex flex-wrap justify-around p-1 gap-3.5">
        {searchResults.length === 0 ? (
          <div className="text-2xl">No movie with such name found</div>
        ) : (
          searchResults.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default Home;
