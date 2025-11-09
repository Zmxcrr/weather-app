import React from 'react';
import { formatTime, formatDate } from '../../utils/weatherUtils';
import { useI18n } from '../../hooks/useI18n';

interface TimeCardProps {
    cityName: string;
    timezone: number;
}

export const TimeCard: React.FC<TimeCardProps> = ({ cityName, timezone }) => {
    const { language } = useI18n();

    return (
        <div className="h-full p-4 flex flex-col justify-center">
            <div className="text-center mb-6">
                <h3 className="text-4xl font-bold mb-2">{cityName}</h3>
            </div>
            <div className="text-center">
                <div className="text-8xl font-bold mb-4">{formatTime(Date.now() / 1000, timezone)}</div>
                <div className="text-xl opacity-80">{formatDate(Date.now() / 1000, timezone, language)}</div>
            </div>
        </div>
    );
};