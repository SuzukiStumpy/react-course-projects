import './Album.css'

export default function Album({ album, selectedAlbum, onSelect }) {
    const selected = (album?.id === selectedAlbum?.id);

    return (
        <div className="album">
            <img src={album.image} alt={album.title} />
            <div>
                <h3>{album.title}</h3>
                <p>{album.artist} ({album.year})</p>
            </div>
            <button onClick={() => onSelect(album)}>{selected ? "Close" : "Select"}</button>
        </div>
    );
}