import { ForecastItem } from '../types/weather';

export function formatTime(timestamp: number, timezone: number = 0): string {
    const date = new Date((timestamp + timezone) * 1000);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

export function formatDate(timestamp: number, timezone: number = 0, lang: string = 'en'): string {
    const date = new Date((timestamp + timezone) * 1000);
    const days = lang === 'ru'
        ? ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = lang === 'ru'
        ? ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
        : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];

    return `${dayName}, ${day} ${month}`;
}

export function aggregateForecastByDay(forecastList: ForecastItem[]): Map<string, ForecastItem[]> {
    const grouped = new Map<string, ForecastItem[]>();

    forecastList.forEach(item => {
        const date = new Date(item.dt * 1000).toISOString().split('T')[0];
        if (!grouped.has(date)) {
            grouped.set(date, []);
        }
        grouped.get(date)!.push(item);
    });

    return grouped;
}