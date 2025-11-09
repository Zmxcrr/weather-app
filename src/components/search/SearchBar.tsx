import React, { memo } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { SearchIcon } from '../weather/icons';

interface SearchBarProps {
    onSearch: (query: string) => void;
    value: string;
    onChange: (value: string) => void;
    currentCity?: string;
    onFocus?: () => void;
    onEnterPress?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchBar = memo<SearchBarProps>(({
                                                   onSearch,
                                                   value,
                                                   onChange,
                                                   currentCity,
                                                   onFocus,
                                                   onEnterPress,
                                                   onKeyDown
                                               }) => {
    const { t } = useI18n();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onEnterPress) {
            onEnterPress();
        } else {
            onSearch(value);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDown) {
            onKeyDown(e);
        }

        if (e.key === 'Enter' && onEnterPress) {
            e.preventDefault();
            onEnterPress();
        }
    };

    return (
        <div className="relative flex-1">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center bg-[#D9D9D9] border-[1px] border-black dark:border-none dark:bg-[rgba(68,68,68,1)] rounded-full px-6 py-3 shadow-lg">
                    <SearchIcon className="w-6 h-6 text-gray-400 mr-3" />
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onFocus={onFocus}
                        onKeyDown={handleKeyDown}
                        placeholder={currentCity || t.search}
                        autoComplete="off"
                        className="flex-1 bg-transparent text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 border-0 outline-none"
                    />
                </div>
            </form>
        </div>
    );
});

SearchBar.displayName = 'SearchBar';