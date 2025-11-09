import { useLocalStorage } from './useLocalStorage';
import { Units } from '../types/weather';

export function useUnits() {
    const [units, setUnits] = useLocalStorage<Units>('weather-units', 'metric');

    const toggleUnits = () => {
        setUnits(prev => prev === 'metric' ? 'imperial' : 'metric');
    };

    return { units, setUnits, toggleUnits };
}