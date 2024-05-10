export const baseApiUrl = process.env.REACT_APP_API_URL || "https://restcountries.com/v3.1"
export const MONTH_NAMES_RU: string[] = [
    "янв", "фев", "мар", "апр", "май", "июн",
    "июл", "авг", "сен", "окт", "ноя", "дек"
];

export const WEEKDAY_NAMES_RU: string[] = [
    "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
];

export const currencySymbols: { [key: string]: string } = {
    USD: '$',
    RUB: '₽',
    EUR: '€'
};