import { Cloud, Sun, CloudRain, Wind, Thermometer } from 'lucide-react';

interface WeatherCardProps {
  weather: {
    location: string;
    country: string;
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
  };
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  const getWeatherIcon = (condition: string) => {
    const iconClass = "w-24 h-24 text-white drop-shadow-lg";
    
    if (condition.toLowerCase().includes('sunny') || condition.toLowerCase().includes('clear')) {
      return <Sun className={iconClass} />;
    } else if (condition.toLowerCase().includes('rain')) {
      return <CloudRain className={iconClass} />;
    } else if (condition.toLowerCase().includes('cloud')) {
      return <Cloud className={iconClass} />;
    } else {
      return <Sun className={iconClass} />;
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 animate-scale-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1">{weather.location}</h2>
          <p className="text-white/70 text-lg">{weather.country}</p>
        </div>
        <div className="text-right">
          <div className="text-6xl font-light text-white mb-2">
            {weather.temperature}°
          </div>
          <p className="text-white/80 text-lg">{weather.condition}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {getWeatherIcon(weather.condition)}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-white/80">
              <Wind className="w-5 h-5" />
              <span>{weather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Thermometer className="w-5 h-5" />
              <span>{weather.humidity}% humidity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};