import { useQuery } from "@tanstack/react-query";
import { $api } from "api";

export const useCountryQuery = (name: string) => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['country', name],
        queryFn: async () => {
            const response = await $api.get(`/name/${name}`);
            return response.data[0];
        },
        staleTime: 5 * 1000,

    });
    return { data, isLoading, error }
}

export const useCountriesQuery = () => {

    const { data, isLoading, error } = useQuery<Country[]>({
        queryKey: ['country'],
        queryFn: async () => {
            const response = await $api.get(`/all`);
            return response.data;
        },
    });

    return { data, isLoading, error }
}