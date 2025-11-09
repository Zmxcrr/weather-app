import { useState, useEffect, useRef, useCallback } from 'react';
import { AppShell } from './components/layout/AppShell';
import { Header } from './components/layout/Header';
import { SearchBar } from './components/search/SearchBar';
import { SearchSuggestions } from './components/search/SearchSuggestions';
import { LocationBadge } from './components/search/LocationBadge';
import { CurrentWeatherCard } from './components/weather/CurrentWeatherCard';
import { ForecastList } from './components/weather/ForecastList';
import { HourlyForecast } from './components/weather/HourlyForecast';
import { AQICard } from './components/weather/AQICard';
import { Loader } from './components/common/Loader';
import { ErrorState } from './components/common/ErrorState';
import { EmptyState } from './components/common/EmptyState';
import { OfflineState } from './components/common/OfflineState';
import { NotFoundState } from './components/common/NotFoundState';
import { useDebounce } from './hooks/useDebounce';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useGeolocation } from './hooks/useGeolocation';
import { useUnits } from './hooks/useUnits';
import { useI18n } from './hooks/useI18n';
import { useWeather } from './hooks/useWeather';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { weatherApi } from './services/weatherApi';
import { City } from './types/weather';
import { TimeCard } from "./components/weather/TimeCard.tsx";

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [searchHistory, setSearchHistory] = useLocalStorage<City[]>('weather-history', []);
    const [searchError, setSearchError] = useState<'offline' | 'not-found' | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchContainerRef = useRef<HTMLDivElement>(null);

    const debouncedSearch = useDebounce(searchQuery, 400);
    const { coordinates, loading: geoLoading, getLocation } = useGeolocation();
    const { units } = useUnits();
    const { language } = useI18n();
    const isOnline = useOnlineStatus();

    const lat = selectedCity?.lat ?? coordinates?.lat ?? null;
    const lon = selectedCity?.lon ?? coordinates?.lon ?? null;

    const { current, forecast, airQuality, loading, error } = useWeather(lat, lon, units, language);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (showSuggestions && searchQuery.trim().length === 0) {
            setSuggestions(searchHistory.slice(0, 5));
            setSearchError(null);
        }
    }, [showSuggestions, searchQuery, searchHistory]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (searchQuery.trim().length > 0 && searchQuery !== debouncedSearch) {
                setSearchError(null);
            }

            if (!isOnline && debouncedSearch.trim().length > 2) {
                setSuggestions([]);
                setSearchError('offline');
                return;
            }

            if (debouncedSearch.trim().length > 2) {
                try {
                    const apiCities = await weatherApi.searchCities(debouncedSearch, 5);
                    const historyMatches = searchHistory.filter(city =>
                        city.name.toLowerCase().includes(debouncedSearch.toLowerCase())
                    );

                    const combined: City[] = [];
                    const seen = new Set<string>();

                    historyMatches.forEach(city => {
                        const key = `${city.lat}-${city.lon}`;
                        if (!seen.has(key)) {
                            combined.push(city);
                            seen.add(key);
                        }
                    });

                    apiCities.forEach(city => {
                        const key = `${city.lat}-${city.lon}`;
                        if (!seen.has(key) && combined.length < 5) {
                            combined.push(city);
                            seen.add(key);
                        }
                    });

                    setSuggestions(combined);

                    if (combined.length === 0 && debouncedSearch === searchQuery.trim()) {
                        setSearchError('not-found');
                    } else {
                        setSearchError(null);
                    }
                } catch (err) {
                    console.error('Search error:', err);
                    setSuggestions([]);

                    const isNetworkError = err instanceof TypeError ||
                        (err instanceof Error && err.message.includes('Failed to fetch'));

                    if (isNetworkError) {
                        setSearchError('offline');
                    } else if (debouncedSearch === searchQuery.trim()) {
                        setSearchError('not-found');
                    }
                }
            } else if (debouncedSearch.trim().length === 0 && showSuggestions) {
                setSuggestions(searchHistory.slice(0, 5));
                setSearchError(null);
            } else {
                setSuggestions([]);
                setSearchError(null);
            }
        };

        fetchSuggestions();
    }, [debouncedSearch, showSuggestions, searchHistory, searchQuery, isOnline]);

    const handleCitySelect = useCallback((city: City) => {
        setSelectedCity(city);
        setSearchQuery('');
        setSuggestions([]);
        setShowSuggestions(false);
        setSearchError(null);

        const updatedHistory = [
            city,
            ...searchHistory.filter(c => !(c.lat === city.lat && c.lon === city.lon))
        ].slice(0, 10);
        setSearchHistory(updatedHistory);
    }, [searchHistory, setSearchHistory]);

    const handleCurrentLocation = useCallback(() => {
        setSelectedCity(null);
        getLocation();
        setSearchQuery('');
        setSuggestions([]);
        setShowSuggestions(false);
        setSearchError(null);
    }, [getLocation]);

    const handleSearchChange = useCallback((value: string) => {
        setSearchQuery(value);
        setShowSuggestions(true);
        if (value.length === 0) {
            setSearchError(null);
        }
    }, []);

    const handleSearchFocus = useCallback(() => {
        setShowSuggestions(true);
        if (searchQuery.trim().length === 0) {
            setSuggestions(searchHistory.slice(0, 5));
        }
    }, [searchQuery, searchHistory]);

    const currentCityName = selectedCity?.name || (current?.name);
    const historyCount = suggestions.filter(s =>
        searchHistory.some(h => h.lat === s.lat && h.lon === s.lon)
    ).length;

    const handleEnterPress = useCallback(() => {
        if (suggestions.length > 0) {
            const index = selectedIndex >= 0 ? selectedIndex : 0;
            handleCitySelect(suggestions[index]);
            setSelectedIndex(-1);
        }
    }, [suggestions, selectedIndex, handleCitySelect]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (!showSuggestions || suggestions.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < suggestions.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev > 0 ? prev - 1 : suggestions.length - 1
                );
                break;
            case 'Escape':
                setShowSuggestions(false);
                setSelectedIndex(-1);
                break;
        }
    }, [showSuggestions, suggestions.length]);

    const renderSearchSection = () => (
        <div className="max-w-7xl mx-auto mb-8">
            <div className="flex gap-4 items-center">
                <div ref={searchContainerRef} className="flex-1 relative z-50">
                    <SearchBar
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onSearch={() => {}}
                        currentCity={currentCityName}
                        onFocus={handleSearchFocus}
                        onEnterPress={handleEnterPress}
                        onKeyDown={handleKeyDown}
                    />
                    {showSuggestions && suggestions.length > 0 && (
                        <SearchSuggestions
                            suggestions={suggestions}
                            onSelect={handleCitySelect}
                            historyCount={historyCount}
                            selectedIndex={selectedIndex}
                        />
                    )}
                    {showSuggestions && searchError === 'not-found' && (
                        <div className="absolute z-10 w-full mt-2">
                            <NotFoundState query={debouncedSearch} />
                        </div>
                    )}
                    {showSuggestions && searchError === 'offline' && (
                        <div className="absolute z-10 w-full mt-2">
                            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6">
                                <div className="text-center">
                                    <div className="text-4xl mb-3">📡</div>
                                    <h3 className="text-lg font-bold mb-1 dark:text-white">
                                        {language === 'ru' ? 'Нет подключения' : 'No Connection'}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {language === 'ru'
                                            ? 'Проверьте подключение к интернету'
                                            : 'Check your internet connection'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <LocationBadge onClick={handleCurrentLocation} />
            </div>
        </div>
    );

    if (loading || geoLoading) {
        return (
            <AppShell>
                <Header />
                <Loader />
            </AppShell>
        );
    }

    if (!isOnline) {
        return (
            <AppShell>
                <Header />
                {renderSearchSection()}
                <OfflineState />
            </AppShell>
        );
    }

    if (error) {
        return (
            <AppShell>
                <Header />
                {renderSearchSection()}
                <ErrorState message={error} />
            </AppShell>
        );
    }

    if (!current || !forecast) {
        return (
            <AppShell>
                <Header />
                {renderSearchSection()}
                {!searchError && !showSuggestions && <EmptyState />}
            </AppShell>
        );
    }

    return (
        <AppShell>
            <Header />
            <div className="max-w-7xl mx-auto">
                {renderSearchSection()}

                <div className="gap-y-7 grid md:[grid-template-rows:330px_360px_350px]">
                    <div className="grid grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] gap-7">
                        <div className="bg-[#D9D9D9] dark:bg-[#444444] rounded-3xl [box-shadow:10px_10px_4px_rgba(0,0,0,0.5)]">
                            <TimeCard cityName={current.name} timezone={current.timezone} />
                        </div>
                        <div className="bg-[#D9D9D9] dark:bg-[#444444] rounded-3xl [box-shadow:10px_10px_4px_rgba(0,0,0,0.5)]">
                            <CurrentWeatherCard weather={current} units={units} />
                        </div>
                    </div>
                    <div className="grid grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] gap-7">
                        <div className="bg-[#D9D9D9] dark:bg-[#444444] rounded-3xl [box-shadow:10px_10px_4px_rgba(0,0,0,0.5)]">
                            <ForecastList forecast={forecast} units={units} />
                        </div>
                        <div className="bg-[#D9D9D9] dark:bg-[#444444] rounded-3xl [box-shadow:10px_10px_4px_rgba(0,0,0,0.5)]">
                            <HourlyForecast forecast={forecast} units={units} timezone={current.timezone} />
                        </div>
                    </div>
                    <div className="bg-[#D9D9D9] dark:bg-[#444444] rounded-3xl [box-shadow:10px_10px_4px_rgba(0,0,0,0.5)]">
                        {airQuality && <AQICard airQuality={airQuality} />}
                    </div>
                </div>
            </div>
        </AppShell>
    );
}

export default App;