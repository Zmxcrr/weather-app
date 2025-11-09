import React from 'react';
import { ForecastResponse, Units } from '../../types/weather';
import { useI18n } from '../../hooks/useI18n';
import { formatTime } from '../../utils/weatherUtils';
import { WeatherIcon } from './icons/WeatherIcons';
import {WindDirectionIcon} from "./icons/WindDirection.tsx";

interface HourlyForecastProps {
    forecast: ForecastResponse;
    units: Units;
    timezone?: number;
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecast, units, timezone = 0 }) => {
    const { t } = useI18n();
    const tempUnit = units === 'metric' ? '°C' : '°F';
    const speedUnit = units === 'metric' ? 'km/h' : 'mph';

    const now = Date.now() / 1000;
    const futureForecasts = forecast.list.filter(item => item.dt >= now);
    const hourlyData = futureForecasts.slice(0, 5);

    const getTimeColor = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const hour = date.getHours();

        if (hour >= 6 && hour < 21) return 'bg-gradient-to-b from-[rgba(248,133,8,1)] to-[rgba(246,250,217,0.3)]';
        return 'bg-gradient-to-b from-[rgba(68,61,100,1)] to-[rgba(101,130,198,0.3)]';
    };

    return (
        <div className="h-full p-4">
            <h3 className="font-bold text-3xl text-center mt-3 mb-6">{t.hourlyForecast}</h3>
            <div className="grid grid-cols-5  justify-items-center items-center">
                {hourlyData.map((item, index) => {
                    const colorClass = getTimeColor(item.dt);

                    return (
                        <div key={index} className={`${colorClass} dark:bg-none dark:bg-[#373636] w-[120px] rounded-[40px] p-4 text-center`}>
                            <div className="font-bold text-2xl mb-3">
                                {formatTime(item.dt, timezone)}
                            </div>
                            <div>
                                <WeatherIcon condition={item.weather[0].main} className="w-16 h-16 mx-auto" />
                            </div>
                            <div className="text-2xl font-bold mb-3">
                                {Math.round(item.main.temp)}{tempUnit}
                            </div>
                            <div className="flex justify-center">
                                <WindDirectionIcon rotation={item.wind.deg} size={45} className="transition-transform" />
                            </div>
                            <div className="font-bold text-xl">
                                {Math.round(item.wind.speed)}{speedUnit === 'km/h' ? t.kmh : t.mph}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};