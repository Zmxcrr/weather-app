import { useState } from 'react';
import { Coordinates } from '../types/weather';

interface GeolocationState {
    coordinates: Coordinates | null;
    loading: boolean;
    error: string | null;
}

export function useGeolocation() {
    const [state, setState] = useState<GeolocationState>({
        coordinates: null,
        loading: false,
        error: null
    });

    const getLocation = () => {
        if (!navigator.geolocation) {
            setState({ coordinates: null, loading: false, error: 'Geolocation is not supported' });
            return;
        }

        setState({ coordinates: null, loading: true, error: null });

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({
                    coordinates: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    },
                    loading: false,
                    error: null
                });
            },
            (error) => {
                setState({ coordinates: null, loading: false, error: error.message });
            }
        );
    };

    return { ...state, getLocation };
}