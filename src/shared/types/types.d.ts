import { FC } from "react";

declare global {
    type Routes = {
        path: string;
        id: number;
        element: JSX.Element;
        children?: {
            path: string;
            id: number;
            element: JSX.Element;
        }[];
    }

    type Flag = {
        alt: string;
        png: string;
        svg: string;
    }

    type Language = {
        [code: string]: string;
    };

    type Currency = {
        [code: string]: {
            name: string;
            symbol: string;
        }
    }

    type Name = {
        common: string;
        official: string;
    }

    type CountryMap = {
        googleMaps: string;
        openStreetMaps: string;
    }
    type LatLng = number[]
    type Country = {
        name: Name
        flags: Flag;
        capital: string;
        currencies: Currency;
        languages: Language;
        maps?: CountryMap;
        latlng: LatLng
    }

    type ErrorResponse = {
        status: number;
        message: string;
    };

    interface Window {
        google: any;
    }
}