import { useState } from 'react';
import Album from './Album';

export default function AlbumList({ albums, selectedAlbum, onSelect }) {

    const [sort, setSort] = useState('title');

    let sortedAlbums = albums;

    if (sort === 'title') sortedAlbums = albums.slice().sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'artist') sortedAlbums = albums.slice().sort((a, b) => a.artist.localeCompare(b.artist));
    if (sort === 'release') sortedAlbums = albums.slice().sort((a, b) => Number(a.year) - Number(b.year));

    return (
        <div className="album-list">
            <h2>Albums</h2>
            {sortedAlbums.map((album, idx) => <Album album={album} selectedAlbum={selectedAlbum} key={idx} onSelect={onSelect} />)}

            <form>
                <label>Sort by: </label>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="title">Album title</option>
                    <option value="artist">Artist</option>
                    <option value="release">Release year</option>
                </select>
            </form>
            <br />
        </div>
    );
}