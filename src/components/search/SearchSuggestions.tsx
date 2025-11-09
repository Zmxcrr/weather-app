import React from 'react';
import { City } from '../../types/weather';
import { RecentlyIcon } from '../weather/icons';

interface SearchSuggestionsProps {
    suggestions: City[];
    onSelect: (city: City) => void;
    historyCount: number;
    selectedIndex?: number;
}

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ suggestions, onSelect, historyCount, selectedIndex = -1  }) => {
    if (suggestions.length === 0) return null;

    return (
        <div className="absolute z-30 w-full mt-2 bg-white dark:bg-[#444444] rounded-lg shadow-xl max-h-96 overflow-y-auto">
            {suggestions.map((city, index) => (
                <button
                    key={`${city.lat}-${city.lon}-${index}`}
                    onClick={() => onSelect(city)}
                    onMouseDown={(e) => e.preventDefault()}
                    className={`w-full text-left px-4 py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0 flex items-center justify-between
            ${index === selectedIndex
                        ? 'bg-blue-100 dark:bg-blue-900'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                >
                    <div>
                        <div className="font-medium dark:text-white">{city.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {city.state ? `${city.state}, ` : ''}{city.country}
                        </div>
                    </div>
                    {index < historyCount && (
                        <RecentlyIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    )}
                </button>
            ))}
        </div>
    );
};