import { useEffect, useState } from "react";

export  function WeatherDashboard() {
  const API_KEY = "d5dc44c438b96fd8a4dc961fe2afb690";
  const CITY = "London";

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch weather data
  async function fetchWeather() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) throw new Error("Failed to fetch weather");

      const data = await response.json();
      setWeather(data);

      // Update document title with temperature
      document.title = `${data.main.temp}°C | Weather`;

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Initial fetch + auto-refresh
  useEffect(() => {
    fetchWeather();

    const timer = setInterval(fetchWeather, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  return (
    <div className="weather-dashboard">
      <h2>Weather Dashboard</h2>

      {/* Refresh Button */}
      <button onClick={fetchWeather}>Refresh Weather</button>

      {/* Loading */}
      {loading && <p>Loading weather...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Weather Data */}
      {weather && !loading && !error && (
        <div className="weather-card">
          
          {/* Weather Icon */}
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />

          <h3>{weather.name}</h3>

          <p><strong>{weather.main.temp}°C</strong></p>
          <p>{weather.weather[0].description}</p>

          {/* Bonus: More data */}
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
