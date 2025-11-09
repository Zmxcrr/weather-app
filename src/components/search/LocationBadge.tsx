import React from 'react';
import { useI18n } from '../../hooks/useI18n';

interface LocationBadgeProps {
    onClick: () => void;
}

export const LocationBadge: React.FC<LocationBadgeProps> = ({ onClick }) => {
    const { t } = useI18n();

    return (
        <button
            onClick={onClick}
            className="h-full flex items-center gap-2 px-6 py-3 bg-green-500  text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
            <img src={'src/img/icons/curr_loc.svg'} className="w-[25px] h-[25px]" alt={t.currentLocation}/>
            <span className="font-extrabold text-base">{t.currentLocation}</span>
        </button>
    );
};
