import React from 'react';

import {
    SunnyIcon,
    CloudyIcon,
    PartlyCloudyIcon,
    RainyIcon,
    SnowyIcon,
    ThunderstormIcon,
    FoggyIcon
} from './index';

interface WeatherIconProps {
    condition: string;
    className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = "w-32 h-32" }) => {
    const renderIcon = () => {
        const weatherType = condition.toLowerCase();

        switch (weatherType) {
            case 'clear':
                return <SunnyIcon className={className} />;

            case 'clouds':
            case 'overcast':
                return <CloudyIcon className={className} />;

            case 'rain':
            case 'drizzle':
            case 'shower rain':
            case 'light rain':
            case 'moderate rain':
            case 'heavy intensity rain':
            case 'extreme rain':
                return <RainyIcon className={className} />;

            case 'snow':
            case 'light snow':
            case 'heavy snow':
            case 'sleet':
            case 'light shower sleet':
            case 'shower sleet':
            case 'light rain and snow':
            case 'rain and snow':
            case 'light shower snow':
            case 'shower snow':
            case 'heavy shower snow':
                return <SnowyIcon className={className} />;

            case 'thunderstorm':
            case 'thunderstorm with light rain':
            case 'thunderstorm with rain':
            case 'thunderstorm with heavy rain':
            case 'light thunderstorm':
            case 'heavy thunderstorm':
            case 'ragged thunderstorm':
            case 'thunderstorm with light drizzle':
            case 'thunderstorm with drizzle':
            case 'thunderstorm with heavy drizzle':
                return <ThunderstormIcon className={className} />;

            case 'mist':
            case 'fog':
            case 'haze':
            case 'smoke':
            case 'dust':
            case 'sand':
            case 'ash':
            case 'squall':
            case 'tornado':
                return <FoggyIcon className={className} />;

            case 'few clouds':
            case 'scattered clouds':
            case 'broken clouds':
                return <PartlyCloudyIcon className={className} />;

            default:
                return <PartlyCloudyIcon className={className} />;
        }
    };

    return <div className="flex items-center justify-center">{renderIcon()}</div>;
};