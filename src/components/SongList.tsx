import React, {useEffect, useState} from 'react';
import uuid from "uuid/v1";
import {SongCreationForm} from "./SongCreationForm";

export function SongList() {
  const [songs, setSongs] = useState([
    {title: 'almost home', id: "1"},
    {title: 'memory gospel', id: "2"},
    {title: 'this wild darkness', id: "3"}
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title: string) => {
    setSongs([...songs, {title, id: uuid()}]);
  };

  useEffect(() => {
    console.log("USE_EFFECT hook ran for age:", age)
  }, [age]);

  useEffect(() => {
    console.log("USE_EFFECT hook ran for songs change", songs)
  }, [songs]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return (<li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <SongCreationForm addSong={addSong}/>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
}
