import React from "react";
import { useState, useEffect } from 'react'
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Card from "./assets/components/Card";

function App() {
  const [searchQuery, setSearchQuery] = useState("");         // user input
  const [searchResults, setSearchResults] = useState([]);     // movies from TMDB

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleKeypress = (e) => {
    if(e.key == "Enter"){
      search(searchQuery)
      document.activeElement.blur();
    }
  }

  const handleClick = () => {
    if (searchQuery.trim()) {
      search(searchQuery);
    }
  }

  const search = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );

      const data = await response.json();
      // console.log(data);
      setSearchResults(data.results) // Array of movie names
    } catch (error) {
      console.error(error)
    }
  }


  const fetchTrending = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      )

      const data = await response.json()
      setSearchResults(data.results)
    } catch (error) {
      console.error("An erro occured", error)
    }
  }
  useEffect(() => {

    fetchTrending()
  }, [])
  
  
  

  return (
  <>
    <Navbar />
    <div className="search flex w-full p-3 justify-center">
      <input type="text" 
      className="bg-white rounded-l-full p-1 w-1/3" 
      onChange={handleChange} 
      onKeyDown={handleKeypress}
      />
      <button className="bg-red-500 rounded-r-full p-1" onClick={handleClick}>Search</button>
    </div>

    {/* <Card /> */}



    <div className="movie-area bg--50 flex flex-wrap justify-around p-1 gap-3.5">
      {searchResults.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}

    </div>
  </>
  )
}

export default App;
