import React, { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [heroPoster, setHeroPoster] = useState("");

  useEffect(() => {
    const fetchPoster = async () => {
      const poster = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      setHeroPoster(poster);
    };
    fetchPoster();
  }, []);

  return (
    <div className="hero">
      <img src={heroPoster} alt="Poster" />
    </div>
  );
};

export default Hero;
