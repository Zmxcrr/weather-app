import { useLocalStorage } from './useLocalStorage';
import { Language } from '../types/weather';
import { translations } from '../i18n/translations';

export function useI18n() {
    const [language, setLanguage] = useLocalStorage<Language>('weather-lang', 'en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ru' : 'en');
    };

    const t = translations[language];

    return { language, setLanguage, toggleLanguage, t };
}