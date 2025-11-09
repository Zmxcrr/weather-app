import { City, ForecastResponse, AirQuality, Units, Language } from '../types/weather';

const API_KEY = import.meta.env.VITE_OWM_API_KEY;
const BASE_URL = 'https://api.openweathermap.org';

export const weatherApi = {
    async searchCities(query: string, limit: number = 5): Promise<City[]> {
        const response = await fetch(
            `${BASE_URL}/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=${limit}&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error('Failed to fetch cities');
        return response.json();
    },

    async reverseGeocode(lat: number, lon: number): Promise<City[]> {
        const response = await fetch(
            `${BASE_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error('Failed to reverse geocode');
        return response.json();
    },

    async getCurrentWeather(lat: number, lon: number, units: Units = 'metric', lang: string = 'en') {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY}`,
                {
                    signal: controller.signal,
                }
            );

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    throw new Error('Request timeout');
                }
                throw new Error(`Failed to fetch weather: ${error.message}`);
            }
            throw error;
        }
    },

    async getForecast(lat: number, lon: number, units: Units, lang: Language): Promise<ForecastResponse> {
        const response = await fetch(
            `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error('Failed to fetch forecast');
        return response.json();
    },

    async getAirQuality(lat: number, lon: number): Promise<AirQuality> {
        const response = await fetch(
            `${BASE_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error('Failed to fetch air quality');
        return response.json();
    }
};