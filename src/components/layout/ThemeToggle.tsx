import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D9D9D9] dark:bg-[#444444] shadow-md"
        >
            <div className="relative border-black border-[1px] w-12 h-6 rounded-full bg-gray-300 dark:bg-[#383838]">
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-black dark:bg-white transition-transform ${isDark ? 'translate-x-6' : ''}`}></div>
            </div>
            <span className="text-base font-extrabold dark:text-white">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </span>
        </button>
    );
};
