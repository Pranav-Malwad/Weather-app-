import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";

const Countries = () => {
  const [weatherData, setWeatherData] = useState(null); // Initialize weatherData as null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100"
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center items-center mt-8">
        <table className="table-fixed w-full border-collapse border border-gray-300 bg-gray-50 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 flex items-center justify-center w-full">
              <th className="px-4 py-2 w-1/3">City Name</th>
              <th className="px-4 py-2 w-1/3">Country</th>
              <th className="px-4 py-2 w-1/3">Timezone</th>
            </tr>
          </thead>
          <tbody>
            {weatherData ? (
              weatherData.results.map((city) => (
                <tr
                  key={city.geoname_id}
                  className="border-b border-gray-200 flex w-full"
                >
                  <td className="px-4 py-2 flex items-center justify-center w-full">
                    <Link to={`/weather/${city.name}`}>{city.name}</Link>{" "}
                    {/* Pass city name as a parameter */}
                  </td>
                  <td className="px-4 py-2 flex items-center justify-center w-full">
                    {city.cou_name_en}
                  </td>
                  <td className="px-4 py-2 flex items-center justify-center w-full">
                    {city.timezone}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  <Loader />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Countries;
