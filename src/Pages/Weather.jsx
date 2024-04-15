import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

const WeatherPage = () => {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=90468e43241867b4faa8f0545a7c9981`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [cityName]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!weatherData) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-red-500 to-purple-500">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Weather for {weatherData.name}
        </h1>
        <div className="  mb-2">
          <p className="mr-2 ">Latitude: {weatherData.coord.lat}</p>
          <p>Longitude: {weatherData.coord.lon}</p>
        </div>
        <div className="mb-2">
          <p className="mr-2">Temperature: {weatherData.main.temp} Kelvin</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="mr-2">Wind Speed: {weatherData.wind.speed} m/s</p>
          <img
            className=" mr-2"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
