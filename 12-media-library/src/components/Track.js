import './Track.css';

export default function Track({ track }) {
    return (
        <div className="track">
            <div className="trackName">{track.name}</div>
            <div className="trackLength">{track.length}</div>
        </div>
    );
}