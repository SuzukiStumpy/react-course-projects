import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched, onSelectMovie, onDeleteWatched }) {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} onDeleteWatched={onDeleteWatched} />
            ))}
        </ul>
    );
}