import React from 'react';
import { useI18n } from '../../hooks/useI18n';

export const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage } = useI18n();

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 shadow-md rounded-full bg-[#D9D9D9] dark:bg-[#444444] hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors hover:shadow-lg"
        >
      <span className="text-sm font-medium dark:text-white">
        {language === 'en' ? 'EN' : 'RU'}
      </span>
        </button>
    );
};