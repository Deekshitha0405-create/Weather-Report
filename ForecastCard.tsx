import { Sun, Cloud, CloudRain, CloudSun } from 'lucide-react';

interface ForecastCardProps {
  forecast: {
    day: string;
    high: number;
    low: number;
    condition: string;
    icon: string;
  };
  delay?: number;
}

export const ForecastCard = ({ forecast, delay = 0 }: ForecastCardProps) => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8 text-white";
    
    switch (iconName) {
      case 'sun':
        return <Sun className={iconClass} />;
      case 'cloud-sun':
        return <CloudSun className={iconClass} />;
      case 'cloud-rain':
        return <CloudRain className={iconClass} />;
      case 'cloudy':
        return <Cloud className={iconClass} />;
      default:
        return <Sun className={iconClass} />;
    }
  };

  return (
    <div 
      className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
        {forecast.day}
      </h3>
      
      <div className="flex justify-center mb-4">
        {getIcon(forecast.icon)}
      </div>
      
      <div className="space-y-1">
        <div className="text-white text-xl font-bold">
          {forecast.high}°
        </div>
        <div className="text-white/60 text-sm">
          {forecast.low}°
        </div>
      </div>
    </div>
  );
};