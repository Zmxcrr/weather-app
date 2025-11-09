import React from 'react';
import { ForecastResponse, Units } from '../../types/weather';
import { ForecastDayCard } from './ForecastDayCard';
import { aggregateForecastByDay } from '../../utils/weatherUtils';
import { useI18n } from '../../hooks/useI18n';

interface ForecastListProps {
    forecast: ForecastResponse;
    units: Units;
}

export const ForecastList: React.FC<ForecastListProps> = ({ forecast, units }) => {
    const { t } = useI18n();
    const grouped = aggregateForecastByDay(forecast.list);
    const days = Array.from(grouped.entries()).slice(1, 6);

    return (
        <div className="h-full p-4">
            <h3 className="font-bold text-3xl text-center mt-3 mb-6">{t.forecast5Days}</h3>
            <div>
                {days.map(([date, items]) => (
                    <ForecastDayCard key={date} date={date} items={items} units={units} />
                ))}
            </div>
        </div>
    );
};