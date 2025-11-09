import React from 'react';
import { ForecastItem, Units } from '../../types/weather';
import { WeatherIcon } from './icons/WeatherIcons.tsx';
import { useI18n } from '../../hooks/useI18n';

interface ForecastDayCardProps {
    date: string;
    items: ForecastItem[];
    units: Units;
}

export const ForecastDayCard: React.FC<ForecastDayCardProps> = ({ date, items, units }) => {
    const { language } = useI18n();
    const tempUnit = units === 'metric' ? '°C' : '°F';
    const avgTemp = Math.round(items.reduce((sum, item) => sum + item.main.temp, 0) / items.length);
    const mainWeather = items[Math.floor(items.length / 2)].weather[0];

    const dateObj = new Date(date);
    const dayName = dateObj.toLocaleDateString(language, { weekday: 'long' });
    const dayMonth = dateObj.toLocaleDateString(language, { day: 'numeric', month: 'short' });

    return (
        <div className="grid [grid-template-columns:1fr_2fr_4fr] justify-items-center items-center">
            <div>
                <WeatherIcon condition={mainWeather.main} className="w-12 h-12" />
            </div>
            <div className="text-2xl font-bold">
                {avgTemp}{tempUnit}
            </div>
            <div className="text-xl font-bold">{dayName}, {dayMonth}</div>
        </div>
    );
};