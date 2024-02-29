import { useEffect, useRef, useState } from "react";
import { KEY } from "../useMovies";
import StarRating from "./StarRating";
import Loader from "./Loader";

import { useKey } from "../useKey";

export default function MovieDetails({ selectedId, watched, onCloseMovie, onAddWatched }) {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState(0);

    const isWatched = watched.map(movie => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;

    const countRef = useRef(0);

    useKey('Escape', onCloseMovie);

    useEffect(function () {
        if (userRating) countRef.current += 1;
    }, [userRating]);

    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;


    useEffect(function () {
        async function getMovieDetails() {
            setIsLoading(true);
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const json = await res.json();
            setMovie(json);
        }
        getMovieDetails();
        setIsLoading(false);
    }, [selectedId, title]);

    useEffect(function () {
        if (!title) return;

        document.title = `Movie | ${title}`;

        return function () {
            document.title = "usePopcorn";
        }
    }, [title]);

    function handleAdd() {
        const newWatchedMovie = {
            imdbID: selectedId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(' ').at(0)),
            userRating,
            timesRated: countRef.current,
        }
        onAddWatched(newWatchedMovie);
        onCloseMovie();
    }

    return (
        <div className="details">
            {isLoading ? <Loader /> :
                <>
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>
                            &larr;
                        </button>
                        <img src={poster} alt={`Poster of ${movie} movie`} />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐</span>
                                {imdbRating} IMDb rating
                            </p>
                        </div>
                    </header>

                    <section>
                        <div className="rating">
                            {!isWatched ?
                                <>
                                    <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
                                    <button className="btn-add" onClick={handleAdd}>Add to watched list</button>
                                </>
                                :
                                <>
                                    <p style={{ textAlign: "center" }}>You rated this movie:</p>
                                    <StarRating maxRating={10} size={24} defaultRating={watchedUserRating} readOnly={true} />
                                </>
                            }
                        </div>

                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>
            }
        </div>
    );
}