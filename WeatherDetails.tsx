
import { Eye, Sun, Moon, Wind } from 'lucide-react';

interface WeatherDetailsProps {
  weather: {
    pressure: number;
    uvIndex: number;
    visibility: number;
    sunrise: string;
    sunset: string;
  };
}

export const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  const details = [
    { label: 'Pressure', value: `${weather.pressure} hPa`, icon: Wind },
    { label: 'UV Index', value: weather.uvIndex.toString(), icon: Sun },
    { label: 'Visibility', value: `${weather.visibility} km`, icon: Eye },
    { label: 'Sunrise', value: weather.sunrise, icon: Sun },
    { label: 'Sunset', value: weather.sunset, icon: Moon },
  ];

  return (
    <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 animate-scale-in">
      <h3 className="text-white text-xl font-bold mb-6">Weather Details</h3>
      
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div 
            key={detail.label}
            className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-3">
              <detail.icon className="w-5 h-5 text-white/80" />
              <span className="text-white/80 font-medium">{detail.label}</span>
            </div>
            <span className="text-white font-semibold">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};