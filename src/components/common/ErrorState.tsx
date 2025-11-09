import React from 'react';
import { useI18n } from '../../hooks/useI18n';

interface ErrorStateProps {
    message?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
    const { t } = useI18n();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center p-8">
                <div className="text-6xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold mb-2 dark:text-white">{t.error}</h2>
                {message && <p className="text-gray-600 dark:text-gray-400">{message}</p>}
            </div>
        </div>
    );
};