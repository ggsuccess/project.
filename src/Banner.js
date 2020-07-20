import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetfilxOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-button"></button>
          <button className="banner-button"></button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
