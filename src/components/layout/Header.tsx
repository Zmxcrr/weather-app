import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { UnitsToggle } from './UnitsToggle';
import { WeatherAppIcon } from '../weather/icons';

export const Header: React.FC = () => {
    return (
        <header className="flex flex-wrap items-center justify-between gap-4 p-4 mb-4">
            <div className="flex items-center gap-3">
                <WeatherAppIcon />
                <span className="text-2xl font-bold dark:text-white">WeatherApp</span>
            </div>
            <div className="flex gap-3">
                <LanguageToggle />
                <UnitsToggle />
                <ThemeToggle />
            </div>
        </header>
    );
};
