import React from 'react';
import { useI18n } from '../../hooks/useI18n';

interface NotFoundStateProps {
    query: string;
}

export const NotFoundState: React.FC<NotFoundStateProps> = ({ query }) => {
    const { language } = useI18n();

    return (
        <div className="bg-white dark:bg-[#444444] rounded-lg shadow-xl p-6">
            <div className="text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-bold mb-1 dark:text-white">
                    {language === 'ru' ? 'Город не найден' : 'City Not Found'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'ru'
                        ? `Не удалось найти "${query}"`
                        : `Could not find "${query}"`}
                </p>
            </div>
        </div>
    );
};
