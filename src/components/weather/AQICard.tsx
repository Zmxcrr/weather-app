import React from 'react';
import { AirQuality } from '../../types/weather';
import { useI18n } from '../../hooks/useI18n';

interface AQICardProps {
    airQuality: AirQuality;
}

const getAQIColor = (aqi: number): string => {
    switch (aqi) {
        case 1:
            return 'bg-green-500 ring-green-500';
        case 2:
            return 'bg-yellow-400 ring-yellow-400';
        case 3:
            return 'bg-orange-400 ring-orange-400';
        case 4:
            return 'bg-red-500 ring-red-500';
        case 5:
            return 'bg-purple-600 ring-purple-600';
        default:
            return 'bg-gray-400 ring-gray-400';
    }
};

export const AQICard: React.FC<AQICardProps> = ({ airQuality }) => {
    const { t } = useI18n();

    if (!airQuality.list || airQuality.list.length === 0) return null;

    const aqi = airQuality.list[0].main.aqi;
    const aqiLevel = t.aqi[aqi as keyof typeof t.aqi];
    const components = airQuality.list[0].components;

    return (
        <div className="h-full p-4">
            <h3 className="font-bold text-3xl text-center mt-3 mb-6">{t.airQuality}</h3>

            <div className="flex items-center gap-8 ml-4 mr-4">
                <div className="flex-shrink-0">
                    <div className={`w-32 h-32 rounded-full ${getAQIColor(aqi)} flex items-center justify-center shadow-lg ring-4} ring-opacity-50`}>
                        <div className="text-center">
                            <div className="text-5xl font-bold">{aqi}</div>
                            <div className="text-xs  opacity-90">AQI</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="text-3xl font-bold  mb-2">{aqiLevel}</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                        <div className="bg-gray-400 dark:bg-[#373636] rounded-lg p-3">
                            <div className="text-xs  mb-1">PM2.5</div>
                            <div className="text-lg font-bold ">{components.pm2_5.toFixed(1)}</div>
                        </div>
                        <div className="bg-gray-400 dark:bg-[#373636] rounded-lg p-3">
                            <div className="text-xs  mb-1">PM10</div>
                            <div className="text-lg font-bold ">{components.pm10.toFixed(1)}</div>
                        </div>
                        <div className="bg-gray-400 dark:bg-[#373636] rounded-lg p-3">
                            <div className="text-xs  mb-1">O₃</div>
                            <div className="text-lg font-bold ">{components.o3.toFixed(1)}</div>
                        </div>
                        <div className="bg-gray-400 dark:bg-[#373636] rounded-lg p-3">
                            <div className="text-xs  mb-1">NO₂</div>
                            <div className="text-lg font-bold ">{components.no2.toFixed(1)}</div>
                        </div>
                        <div className="bg-gray-400 dark:bg-[#373636] rounded-lg p-3">
                            <div className="text-xs  mb-1">SO₂</div>
                            <div className="text-lg font-bold ">{components.so2.toFixed(1)}</div>
                        </div>
                        <div className="bg-gray-400 dark:bg-[#373636] rounded-lg p-3">
                            <div className="text-xs  mb-1">CO</div>
                            <div className="text-lg font-bold ">{(components.co / 1000).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};