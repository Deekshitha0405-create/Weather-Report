
import { useState } from 'react';
import { WeatherCard } from '@/components/WeatherCard';
import { ForecastCard } from '@/components/ForecastCard';
import { WeatherDetails } from '@/components/WeatherDetails';
import { SearchBar } from '@/components/SearchBar';

// Sample weather data
const sampleWeatherData = {
  location: "New York City",
  country: "United States",
  temperature: 22,
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 12,
  pressure: 1013,
  uvIndex: 6,
  visibility: 10,
  sunrise: "06:42",
  sunset: "19:18"
};

const sampleForecast = [
  { day: "Today", high: 24, low: 18, condition: "sunny", icon: "sun" },
  { day: "Tomorrow", high: 26, low: 19, condition: "partly-cloudy", icon: "cloud-sun" },
  { day: "Wednesday", high: 21, low: 15, condition: "rainy", icon: "cloud-rain" },
  { day: "Thursday", high: 19, low: 12, condition: "cloudy", icon: "cloudy" },
  { day: "Friday", high: 23, low: 16, condition: "sunny", icon: "sun" }
];

const Index = () => {
  const [weatherData, setWeatherData] = useState(sampleWeatherData);
  const [forecast, setForecast] = useState(sampleForecast);

  const handleSearch = (city: string) => {
    // Simulate API call with different sample data
    const cities = {
      "london": {
        location: "London",
        country: "United Kingdom",
        temperature: 15,
        condition: "Rainy",
        humidity: 78,
        windSpeed: 8,
        pressure: 998,
        uvIndex: 3,
        visibility: 8,
        sunrise: "07:15",
        sunset: "18:45"
      },
      "tokyo": {
        location: "Tokyo",
        country: "Japan",
        temperature: 28,
        condition: "Sunny",
        humidity: 45,
        windSpeed: 6,
        pressure: 1020,
        uvIndex: 8,
        visibility: 15,
        sunrise: "05:30",
        sunset: "18:20"
      }
    };
    
    const cityData = cities[city.toLowerCase() as keyof typeof cities];
    if (cityData) {
      setWeatherData(cityData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Weather<span className="text-yellow-300">App</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Beautiful weather forecasts with real-time updates and stunning visuals
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <SearchBar onSearch={handleSearch} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <WeatherCard weather={weatherData} />
            </div>
            <div className="lg:col-span-1">
              <WeatherDetails weather={weatherData} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {forecast.map((day, index) => (
              <ForecastCard key={index} forecast={day} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;