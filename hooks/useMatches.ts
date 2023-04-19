import useSWR from 'swr';

export const useMatches = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR('/api/staticdata', fetcher);

    const isLoading = !data && !error;

    return {
        data: data,
        isLoading,
        isError: error
      }
}