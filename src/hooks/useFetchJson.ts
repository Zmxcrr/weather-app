import { useState, useEffect } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetchJson<T>(url: string | null, deps: any[] = []): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: false,
        error: null
    });

    useEffect(() => {
        if (!url) {
            setState({ data: null, loading: false, error: null });
            return;
        }

        let cancelled = false;
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                if (!cancelled) {
                    setState({ data, loading: false, error: null });
                }
            })
            .catch(error => {
                if (!cancelled) {
                    setState({ data: null, loading: false, error: error.message });
                }
            });

        return () => {
            cancelled = true;
        };
    }, [url, ...deps]);

    return state;
}