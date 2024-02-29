import Track from './Track';

export default function TrackList({ album }) {
    return (
        <div className="track-list">
            <h2>{album.title}</h2>
            <h3>{album.artist} ({album.year})</h3>
            <img src={album.image} alt={`${album.title} cover art`} />
            <p className="details">{album.details}</p>
            <h3>TRACKS</h3>
            {album.tracks.map((track, idx) => (
                <Track track={track} key={idx} />
            ))}
            <br />
        </div>
    );
}