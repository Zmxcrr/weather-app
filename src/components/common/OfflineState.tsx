import React from 'react';
import { useI18n } from '../../hooks/useI18n';

export const OfflineState: React.FC = () => {
    const { language } = useI18n();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center p-8">
                <div className="text-6xl mb-4">📡</div>
                <h2 className="text-2xl font-bold mb-2 dark:text-white">
                    {language === 'ru' ? 'Нет подключения к интернету' : 'No Internet Connection'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    {language === 'ru'
                        ? 'Проверьте подключение и попробуйте снова'
                        : 'Check your connection and try again'}
                </p>
            </div>
        </div>
    );
};
