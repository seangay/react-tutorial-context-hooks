import React, {useState} from 'react';
import uuid from "uuid/v1";

interface Song {
  title: string;
  id: string;
}

export function SongList() {
  const [songs, setSongs] = useState([
    {title: 'almost home', id: "1"},
    {title: 'memory gospel', id: "2"},
    {title: 'this wild darkness', id: "3"}
  ]);

  const addSong = () => {
    setSongs([...songs, {title: "New Song", id: uuid()}]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return (<li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
}
