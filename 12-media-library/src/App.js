import AlbumList from "./components/AlbumList";
import TrackList from "./components/TrackList";
import './App.css';
import { useState } from "react";
import { initialAlbums } from './InitialAlbums.js';


function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const albums = initialAlbums;

  function handleAlbumSelection(selected) {
    setSelectedAlbum((current) => current?.id === selected?.id ? null : selected);
  }


  return (
    <div className="App">
      <h1>media library</h1>
      <div className="container">
        <AlbumList albums={albums} selectedAlbum={selectedAlbum} onSelect={handleAlbumSelection} />
        {selectedAlbum && <TrackList album={selectedAlbum} />}
      </div>
    </div>
  );
}

export default App;
