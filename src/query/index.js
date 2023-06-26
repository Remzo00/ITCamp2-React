import axios from "axios";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";



const ReactQuery = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedCity, setSearchedCity] = useState('');

  const handleSearch = () => {
    setSearchedCity(searchQuery);
  };

  useEffect(() => {
    if (searchedCity === '') {
      return;
    }

    // Fetch weather data for the searched city
    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=4ad4b31380394ec29b9183313232006&q=${searchedCity}`
          );

        setWeatherData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [searchedCity]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && (
        <div>
          <h2>Current Weather in {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Weather: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default ReactQuery