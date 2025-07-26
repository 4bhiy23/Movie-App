import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Card from "./assets/components/Card";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

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


  // The functions that displays the searched movie
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

  // Display trending movies
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

  // Display trending movies on every render
  useEffect(() => {

    fetchTrending()
  }, [])
  
  
  

  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home 
          handleChange = {handleChange}
          handleKeypress = {handleKeypress}
          handleClick = {handleClick}
          searchResults= {searchResults}
          />} 
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    
    
  </>
  )
}

export default App;
