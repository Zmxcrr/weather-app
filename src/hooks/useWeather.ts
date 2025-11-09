import { useState, useEffect } from 'react';
import { CurrentWeather, ForecastResponse, AirQuality, Units, Language } from '../types/weather';
import { weatherApi } from '../services/weatherApi';

interface WeatherState {
    current: CurrentWeather | null;
    forecast: ForecastResponse | null;
    airQuality: AirQuality | null;
    loading: boolean;
    error: string | null;
}

export function useWeather(lat: number | null, lon: number | null, units: Units, lang: Language) {
    const [state, setState] = useState<WeatherState>({
        current: null,
        forecast: null,
        airQuality: null,
        loading: false,
        error: null
    });

    useEffect(() => {
        if (lat === null || lon === null) {
            setState({ current: null, forecast: null, airQuality: null, loading: false, error: null });
            return;
        }

        let cancelled = false;
        setState(prev => ({ ...prev, loading: true, error: null }));

        Promise.all([
            weatherApi.getCurrentWeather(lat, lon, units, lang),
            weatherApi.getForecast(lat, lon, units, lang),
            weatherApi.getAirQuality(lat, lon)
        ])
            .then(([current, forecast, airQuality]) => {
                if (!cancelled) {
                    setState({ current, forecast, airQuality, loading: false, error: null });
                }
            })
            .catch(error => {
                if (!cancelled) {
                    setState({ current: null, forecast: null, airQuality: null, loading: false, error: error.message });
                }
            });

        return () => {
            cancelled = true;
        };
    }, [lat, lon, units, lang]);

    return state;
}