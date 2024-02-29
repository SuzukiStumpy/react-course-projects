import { useState, useEffect } from 'react';

export const KEY = '6375abc';

export function useMovies(query, callback) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(function () {
        callback?.();

        async function fetchMovies() {
            const controller = new AbortController();

            try {
                setIsLoading(true);
                setError("");
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

                if (!res.ok) throw new Error("Something went wrong with fetching movies");
                const json = await res.json();

                if (json.Response === 'False') {
                    throw new Error(`Movie ${query} not found.`);
                }
                setMovies(json.Search);
                setError("");
            }
            catch (err) {
                console.error(err.message);
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            }
            finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }
        // handleCloseMovie();
        fetchMovies();
    }, [query]);

    return [movies, isLoading, error];
}
