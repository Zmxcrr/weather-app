import React from 'react';
import { useUnits } from '../../hooks/useUnits';

export const UnitsToggle: React.FC = () => {
    const { units, toggleUnits } = useUnits();

    return (
        <button
            onClick={toggleUnits}
            className="px-4 py-2 shadow-md rounded-full bg-[#D9D9D9] dark:bg-[#444444] hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors  hover:shadow-lg"
        >
      <span className="text-sm font-medium dark:text-white">
        {units === 'metric' ? '°C' : '°F'}
      </span>
        </button>
    );
};