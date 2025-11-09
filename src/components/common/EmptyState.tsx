import React from 'react';
import { useI18n } from '../../hooks/useI18n';

export const EmptyState: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center p-8">
                <div className="text-6xl mb-4">🌤️</div>
                <h2 className="text-2xl font-bold mb-2 dark:text-white">{t.noData}</h2>
                <p className="">{t.searchCityMsg}</p>
            </div>
        </div>
    );
};
