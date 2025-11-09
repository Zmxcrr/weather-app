import React from 'react';
import { CurrentWeather, Units } from '../../types/weather';

import {useI18n} from "../../hooks/useI18n.ts";
import {formatTime} from "../../utils/weatherUtils.ts";
import {WeatherIcon} from "./icons/WeatherIcons.tsx";

interface CurrentWeatherCardProps {
    weather: CurrentWeather;
    units: Units;
    uvIndex?: number;
}

export const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ weather, units, uvIndex = 8 }) => {
    const { t } = useI18n();
    const tempUnit = units === 'metric' ? '°C' : '°F';
    const speedUnit = units === 'metric' ? 'km/h' : 'mph';


    return (
        <div className="grid grid-cols-[1.5fr_2fr_2fr] p-8 h-full">
            <div className="grid grid-cols-1">
                <div>
                    <div className="text-7xl font-bold mb-2 opacity-70">
                        {Math.round(weather.main.temp)}{tempUnit}
                    </div>
                    <div className="text-xl opacity-70">
                        {t.feelsLike} <span className="text-3xl">{Math.round(weather.main.feels_like)}{tempUnit}</span>
                    </div>
                </div>

                <div className="grid-cols-1 mt-3">
                    <div className="flex items-center gap-4 mb-4">
                        <img src="/icons/sunrise.svg" className="dark:invert w-[48px] h-[48px]" alt={t.sunrise}/>
                        <div>
                            <div className="text-sm opacity-70 mb-1">{t.sunrise}</div>
                            <div className="text-base font-semibold">
                                {formatTime(weather.sys.sunrise, weather.timezone)}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <img src="/icons/sunset.svg" className="dark:invert w-[48px] h-[48px]" alt={t.sunset}/>
                        <div>
                            <div className="text-sm opacity-70 mb-1">{t.sunset}</div>
                            <div className="text-base font-semibold">
                                {formatTime(weather.sys.sunset, weather.timezone)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <WeatherIcon condition={weather.weather[0].main} className="w-[150px] h-[150px]" />
                <div className="font-semibold text-center text-2xl capitalize">
                    {weather.weather[0].description}
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2">
                <div className="grid grid-cols-1 place-items-center">
                    <img src="/icons/humidity.svg" className="dark:invert" alt={t.humidity}/>
                    <div>
                        <div className="font-semibold text-xl text-center">{weather.main.humidity}%</div>
                        <div className="font-medium text-base mb-1 text-center">{t.humidity}</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <img src="/icons/wind.svg" className="dark:invert" alt={t.windSpeed}/>
                    <div>
                        <div className="font-semibold text-xl text-center">{Math.round(weather.wind.speed)}{speedUnit === 'km/h' ? t.kmh : t.mph}</div>
                        <div className="font-medium text-base mb-1 text-center">{t.windSpeed}</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <img src="/icons/pressure.svg" className="dark:invert" alt={t.pressure}/>
                    <div>
                        <div className="font-semibold text-xl text-center">{weather.main.pressure}{t.hPa}</div>
                        <div className="font-medium text-base mb-1 text-center">{t.pressure}</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <img src="/icons/uv.svg" className="dark:invert" alt={t.uv}/>
                    <div>
                        <div className="font-semibold text-xl text-center">{uvIndex}</div>
                        <div className="font-medium text-base mb-1 text-center">{t.uv}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};